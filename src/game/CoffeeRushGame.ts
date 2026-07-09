import * as THREE from 'three';

type Status = 'active' | 'gameOver';
type CourierState = 'away' | 'arriving' | 'waiting' | 'leaving';
type ZoneId = 'machine' | 'packing' | 'sales' | 'pickup' | 'hr' | 'upgrade' | 'pizza';
type ActiveMenu = 'none' | 'hr' | 'upgrade' | 'pizza';

export interface CoffeeRushUiState {
  status: Status;
  shopLevel: number;
  businessDay: number;
  clockLabel: string;
  dayPhase: string;
  dailyRevenue: number;
  dailyGoalTarget: number;
  dailyProgress: number;
  dailyGoalMet: boolean;
  cash: number;
  sales: number;
  reputation: number;
  carrying: string;
  coffeeStock: number;
  walkInQueue: number;
  maxWalkInQueue: number;
  machineLevel: number;
  packingLevel: number;
  staffLevel: number;
  employees: number;
  employeeLimit: number;
  machineProgress: number;
  packingProgress: number;
  courierPatience: number;
  courierStatus: string;
  pickupShelfPackages: number;
  activeMenu: ActiveMenu;
  pizzaUnlocked: boolean;
  pizzaUnlockCost: number;
  objective: string;
  routeHint: string;
  prompt: string;
  alert: string;
  machineUpgradeCost: number;
  packingUpgradeCost: number;
  staffUpgradeCost: number;
  hireCost: number;
  courierWaiting: boolean;
}

interface Zone {
  id: ZoneId;
  label: string;
  hint: string;
  position: THREE.Vector3;
  radius: number;
  color: number;
}

interface RushCustomer {
  mesh: THREE.Group;
  path: THREE.Vector3[];
  targetIndex: number;
  radius: number;
  speed: number;
  life: number;
}

interface WalkInOrder {
  mesh: THREE.Group;
  bar: THREE.Mesh;
  state: 'entering' | 'queued';
  pathIndex: number;
  patience: number;
  maxPatience: number;
}

interface Employee {
  mesh: THREE.Group;
  cargo: THREE.Group;
  phase: 'toMachine' | 'waitMachine' | 'toPacking' | 'pack' | 'toSales' | 'waitSales' | 'toPickup' | 'waitPickup' | 'sell';
  route: 'sales' | 'pickup';
  carrying: 'none' | 'coffee' | 'package';
  wait: number;
}

interface RectCollider {
  center: THREE.Vector3;
  halfX: number;
  halfZ: number;
}

const FIELD_LIMIT_X = 7.2;
const FIELD_MIN_Z = -4.8;
const FIELD_MAX_Z = 4.7;
const BASE_WALK_IN_QUEUE = 4;
const MINUTES_PER_DAY = 1440;
const OPEN_MINUTE = 8 * 60;
const CLOSE_MINUTE = 22 * 60;
const GAME_MINUTES_PER_SECOND = 8;
const BASE_PICKUP_SHELF_CAPACITY = 8;
const WALK_IN_ENTRY_SPAWN = new THREE.Vector3(5.45, 0, 6.05);
const WALK_IN_ENTRY_PATH = [
  new THREE.Vector3(5.45, 0, 4.42),
  new THREE.Vector3(4.35, 0, 2.65),
  new THREE.Vector3(4.18, 0, 0.62),
];
const WALK_IN_QUEUE_POSITIONS = [
  new THREE.Vector3(1.95, 0, -1.32),
  new THREE.Vector3(2.55, 0, -0.82),
  new THREE.Vector3(3.15, 0, -0.32),
  new THREE.Vector3(3.75, 0, 0.18),
  new THREE.Vector3(4.35, 0, 0.68),
  new THREE.Vector3(4.95, 0, 1.18),
  new THREE.Vector3(5.55, 0, 1.68),
  new THREE.Vector3(6.15, 0, 2.18),
];
const RUSH_CUSTOMER_ROUTES = [
  [
    new THREE.Vector3(5.45, 0, 6.05),
    new THREE.Vector3(5.45, 0, 4.38),
    new THREE.Vector3(4.45, 0, 3.35),
    new THREE.Vector3(4.45, 0, 1.3),
    new THREE.Vector3(6.85, 0, 0.2),
    new THREE.Vector3(7.65, 0, 0.2),
  ],
  [
    new THREE.Vector3(5.45, 0, 6.05),
    new THREE.Vector3(5.45, 0, 4.4),
    new THREE.Vector3(6.25, 0, 3.55),
    new THREE.Vector3(6.35, 0, -0.75),
    new THREE.Vector3(4.65, 0, -1.2),
    new THREE.Vector3(4.2, 0, -4.95),
  ],
];

const ZONES: Zone[] = [
  {
    id: 'machine',
    label: 'COFFEE MACHINE',
    hint: 'Pick up fresh coffee',
    position: new THREE.Vector3(-5.15, 0, -2.55),
    radius: 1.25,
    color: 0x2f80ed,
  },
  {
    id: 'packing',
    label: 'PACK',
    hint: 'Stand here to package courier orders',
    position: new THREE.Vector3(-2.15, 0, -2.15),
    radius: 1.1,
    color: 0x00b894,
  },
  {
    id: 'sales',
    label: 'SALES',
    hint: 'Sell unpacked coffee to walk-in customers',
    position: new THREE.Vector3(1.3, 0, -2.45),
    radius: 1.15,
    color: 0xf2c94c,
  },
  {
    id: 'pickup',
    label: 'PICKUP',
    hint: 'Deliver packed coffee to courier cars',
    position: new THREE.Vector3(5.75, 0, 0.65),
    radius: 1.2,
    color: 0xeb5757,
  },
  {
    id: 'hr',
    label: 'HR',
    hint: 'Hire employees with H',
    position: new THREE.Vector3(-5.05, 0, 3.25),
    radius: 1.1,
    color: 0x27ae60,
  },
  {
    id: 'upgrade',
    label: 'UPGRADE',
    hint: 'Upgrade business systems with 1, 2, 3',
    position: new THREE.Vector3(1.95, 0, 3.25),
    radius: 1.25,
    color: 0x9b51e0,
  },
  {
    id: 'pizza',
    label: 'PIZZA $1000',
    hint: 'Unlock the pizza machine with P',
    position: new THREE.Vector3(4.85, 0, -3.65),
    radius: 1.2,
    color: 0xff7f11,
  },
];

export class CoffeeRushGame {
  private readonly container: HTMLDivElement;
  private readonly onUiChange: (state: CoffeeRushUiState) => void;

  private readonly scene = new THREE.Scene();
  private readonly camera = new THREE.PerspectiveCamera(38, 1, 0.1, 120);
  private readonly renderer = new THREE.WebGLRenderer({ antialias: true });
  private readonly clock = new THREE.Clock();
  private readonly keys = new Set<string>();
  private readonly ambientLight = new THREE.AmbientLight(0xffffff, 0.74);
  private readonly sunLight = new THREE.DirectionalLight(0xffffff, 1.72);
  private readonly productionGlow = new THREE.PointLight(0x6bcfff, 0.85, 13);
  private readonly cameraFocus = new THREE.Vector3(0, 0, -0.2);
  private readonly baseCameraOffset = new THREE.Vector3(9.8, 12.2, 11.6);

  private animationId = 0;
  private emitTimer = 0;
  private lastCashPileCount = -1;
  private cameraYaw = 0;
  private targetCameraYaw = 0;
  private cameraTilt = 0;
  private targetCameraTilt = 0;
  private isCameraDragging = false;
  private cameraPointerId = -1;
  private lastCameraPointerX = 0;
  private lastCameraPointerY = 0;

  private readonly player = new THREE.Group();
  private readonly playerVelocity = new THREE.Vector3();
  private readonly playerRadius = 0.42;
  private readonly carryStackGroup = new THREE.Group();

  private readonly machineStockGroup = new THREE.Group();
  private readonly cashPileGroup = new THREE.Group();
  private readonly pickupShelfPackageGroup = new THREE.Group();
  private readonly courierVan = new THREE.Group();
  private readonly pizzaStationGroup = new THREE.Group();
  private readonly zoneRings = new Map<ZoneId, THREE.Mesh>();
  private readonly staticColliders: RectCollider[] = [];

  private machineLabel: THREE.Sprite | null = null;
  private hrLabel: THREE.Sprite | null = null;

  private status: Status = 'active';
  private carriedCoffees = 0;
  private carriedPackages = 0;
  private carriedPizzas = 0;
  private carriedPizzaPackages = 0;
  private cash = 120;
  private sales = 0;
  private reputation = 5;
  private businessDay = 1;
  private gameMinutes = OPEN_MINUTE;
  private dayRevenue = 0;
  private daySales = 0;
  private dayPackages = 0;
  private dailyGoalTarget = 180;
  private shiftClosed = false;
  private machineLevel = 1;
  private packingLevel = 1;
  private staffLevel = 1;
  private machineTimer = 0;
  private machineStock = 0;
  private pickupShelfPackages = 0;
  private packingProgress = 0;
  private walkInTimer = 2;
  private courierState: CourierState = 'away';
  private courierTimer = 8;
  private courierPatience = 0;
  private rushTimer = 4;
  private alert = 'Start with the coffee machine. Fresh coffee appears on the tray.';
  private alertTimer = 0;
  private previousAlert = '';
  private salesCooldown = 0;
  private pickupCooldown = 0;
  private pizzaUnlocked = false;
  private pizzaTimer = 0;
  private pizzaStock = 0;
  private readonly pizzaUnlockCost = 1000;

  private readonly walkIns: WalkInOrder[] = [];
  private readonly rushCustomers: RushCustomer[] = [];
  private readonly employees: Employee[] = [];

  constructor(container: HTMLDivElement, onUiChange: (state: CoffeeRushUiState) => void) {
    this.container = container;
    this.onUiChange = onUiChange;
  }

  start() {
    this.setupRenderer();
    this.createScene();
    this.restart();

    window.addEventListener('resize', this.handleResize);
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('keyup', this.handleKeyUp);
    window.addEventListener('pointermove', this.handlePointerMove);
    window.addEventListener('pointerup', this.handlePointerUp);
    window.addEventListener('pointercancel', this.handlePointerUp);
    this.renderer.domElement.addEventListener('pointerdown', this.handlePointerDown);
    this.renderer.domElement.addEventListener('contextmenu', this.handleContextMenu);
    this.handleResize();
    this.loop();
  }

  dispose() {
    cancelAnimationFrame(this.animationId);
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('keyup', this.handleKeyUp);
    window.removeEventListener('pointermove', this.handlePointerMove);
    window.removeEventListener('pointerup', this.handlePointerUp);
    window.removeEventListener('pointercancel', this.handlePointerUp);
    this.renderer.domElement.removeEventListener('pointerdown', this.handlePointerDown);
    this.renderer.domElement.removeEventListener('contextmenu', this.handleContextMenu);
    this.renderer.dispose();
    this.container.replaceChildren();
  }

  restart() {
    this.status = 'active';
    this.carriedCoffees = 0;
    this.carriedPackages = 0;
    this.carriedPizzas = 0;
    this.carriedPizzaPackages = 0;
    this.cash = 120;
    this.sales = 0;
    this.reputation = 5;
    this.businessDay = 1;
    this.gameMinutes = OPEN_MINUTE;
    this.dayRevenue = 0;
    this.daySales = 0;
    this.dayPackages = 0;
    this.dailyGoalTarget = this.calculateDailyGoalTarget();
    this.shiftClosed = false;
    this.machineLevel = 1;
    this.packingLevel = 1;
    this.staffLevel = 1;
    this.machineTimer = 1.6;
    this.machineStock = 0;
    this.pickupShelfPackages = 0;
    this.packingProgress = 0;
    this.walkInTimer = 1.2;
    this.courierState = 'away';
    this.courierTimer = 7;
    this.courierPatience = 0;
    this.rushTimer = 4.2;
    this.alert = 'New shift started. Follow the floor labels: MACHINE, SALES, PACK, PICKUP.';
    this.alertTimer = 0;
    this.previousAlert = '';
    this.salesCooldown = 0;
    this.pickupCooldown = 0;
    this.pizzaUnlocked = false;
    this.pizzaTimer = 0;
    this.pizzaStock = 0;

    this.player.position.set(-0.4, 0, 0.85);
    this.playerVelocity.set(0, 0, 0);
    this.clearDynamicObjects();
    this.updateCarryVisuals();
    this.updateMachineStockVisuals();
    this.updatePickupShelfVisuals();
    this.updateCashPiles(true);
    this.courierVan.visible = false;
    this.courierVan.position.set(11.2, 0, 0.85);
    this.updatePizzaStationVisuals();
    this.updateDayNightVisuals();

    this.emitUi(true);
  }

  upgradeMachineAction() {
    if (this.status !== 'active') return;
    this.buyMachineUpgrade();
    this.emitUi(true);
  }

  upgradePackingAction() {
    if (this.status !== 'active') return;
    this.buyPackingUpgrade();
    this.emitUi(true);
  }

  upgradeStaffAction() {
    if (this.status !== 'active') return;
    this.buyStaffUpgrade();
    this.emitUi(true);
  }

  hireEmployeeAction() {
    if (this.status !== 'active') return;
    this.hireEmployee();
    this.emitUi(true);
  }

  unlockPizzaMachineAction() {
    if (this.status !== 'active') return;
    this.unlockPizzaMachine();
    this.emitUi(true);
  }

  private setupRenderer() {
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.container.appendChild(this.renderer.domElement);
  }

  private createScene() {
    this.scene.background = new THREE.Color(0xa9d5f7);
    this.scene.fog = new THREE.Fog(0xa9d5f7, 28, 58);

    this.updateCameraControls(1);

    this.scene.add(this.ambientLight);

    this.sunLight.position.set(8, 14, 7);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.mapSize.set(2048, 2048);
    this.sunLight.shadow.camera.left = -15;
    this.sunLight.shadow.camera.right = 15;
    this.sunLight.shadow.camera.top = 15;
    this.sunLight.shadow.camera.bottom = -15;
    this.scene.add(this.sunLight);

    this.productionGlow.position.set(-4.5, 3.4, -1.2);
    this.scene.add(this.productionGlow);

    this.createEnvironment();
    this.createShopLayout();
    this.createStations();
    this.createZones();
    this.createPlayer();
    this.createCourierVan();
    this.createPizzaExpansion();
    this.scene.add(this.machineStockGroup, this.cashPileGroup, this.pickupShelfPackageGroup);
  }

  private createEnvironment() {
    const grass = this.plane([30, 22], [0, -0.035, 0], 0x7dc45d);
    this.scene.add(grass);

    const road = this.plane([3.2, 17], [-9.0, -0.02, 0], 0x23272e);
    const driveLane = this.plane([2.4, 10.5], [-7.15, -0.015, -0.7], 0x3c454f);
    const sidewalk = this.plane([1.0, 17], [-6.95, -0.012, 0], 0xd8d8d8);
    this.scene.add(road, driveLane, sidewalk);

    for (let z = -6.5; z < 7; z += 1.6) {
      const stripe = this.box('road stripe', [0.12, 0.02, 0.78], [-9, 0.015, z], 0xffffff, false, 1, false);
      this.scene.add(stripe);
    }

    const driveSign = this.createFloorSign('DRIVE THRU', 0x2f80ed, 0xffffff, 2.35, 0.78);
    driveSign.position.set(-7.15, 0.035, -4.5);
    driveSign.rotation.z = Math.PI / 2;
    this.scene.add(driveSign);

    const awning = this.box('drive thru awning', [1.45, 0.16, 2.25], [-7.03, 1.6, 1.8], 0x2f80ed);
    const poleA = this.box('awning pole', [0.12, 1.55, 0.12], [-7.62, 0.75, 1.0], 0x1f5faf);
    const poleB = this.box('awning pole', [0.12, 1.55, 0.12], [-7.62, 0.75, 2.6], 0x1f5faf);
    this.scene.add(awning, poleA, poleB);
  }

  private createShopLayout() {
    const shopBase = this.plane([15.8, 11], [0, 0, 0], 0xf1f7ef);
    const kitchen = this.plane([8.3, 6.1], [-3.75, 0.012, -2.0], 0xe9edf1);
    const dining = this.plane([7.5, 8.0], [3.75, 0.016, 0.3], 0xf4d8b8);
    const offices = this.plane([7.7, 2.75], [-1.9, 0.018, 3.55], 0xe7f0e4);
    this.scene.add(shopBase, kitchen, dining, offices);

    const kitchenGrid = new THREE.GridHelper(8.2, 10, 0xd5dbe0, 0xd5dbe0);
    kitchenGrid.position.set(-3.75, 0.035, -2.0);
    kitchenGrid.scale.z = 0.75;
    this.scene.add(kitchenGrid);

    const walls = [
      this.box('back wall', [15.9, 1.35, 0.22], [0, 0.68, -5.42], 0xe8f5e3),
      this.box('left wall', [0.22, 1.35, 10.95], [-7.9, 0.68, 0], 0xe8f5e3),
      this.box('right wall', [0.22, 1.35, 7.0], [7.9, 0.68, 1.35], 0xe8f5e3),
      this.box('front low wall left', [4.5, 0.8, 0.2], [2.55, 0.4, 5.48], 0xe8f5e3),
      this.box('front low wall right', [1.05, 0.8, 0.2], [6.92, 0.4, 5.48], 0xe8f5e3),
      this.box('office partition', [3.8, 1.2, 0.2], [-2.05, 0.62, 2.15], 0xe8f5e3),
      this.box('office divider', [0.2, 1.2, 2.72], [-1.8, 0.62, 3.55], 0xe8f5e3),
    ];
    this.scene.add(...walls);
    this.addStaticCollider(0, -5.42, 8.0, 0.18);
    this.addStaticCollider(-7.9, 0, 0.18, 5.55);
    this.addStaticCollider(7.9, 1.35, 0.18, 3.55);
    this.addStaticCollider(2.55, 5.48, 2.3, 0.18);
    this.addStaticCollider(6.92, 5.48, 0.58, 0.18);
    this.addStaticCollider(-2.05, 2.15, 1.9, 0.16);
    this.addStaticCollider(-1.8, 3.55, 0.16, 1.42);

    const entranceMat = this.createFloorSign('ENTRY', 0x27ae60, 0xffffff, 1.26, 0.42);
    entranceMat.position.set(5.45, 0.068, 4.82);
    this.scene.add(entranceMat);

    const trims = [
      this.box('blue trim', [15.9, 0.13, 0.12], [0, 1.4, -5.27], 0x2f80ed),
      this.box('blue trim', [0.12, 0.13, 10.8], [-7.75, 1.4, 0], 0x2f80ed),
      this.box('blue trim', [0.12, 0.13, 7.0], [7.75, 1.4, 1.35], 0x2f80ed),
      this.box('blue trim', [7.7, 0.13, 0.12], [-1.9, 1.32, 2.3], 0x2f80ed),
    ];
    this.scene.add(...trims);

    this.createDiningFurniture();
  }

  private createDiningFurniture() {
    const tables = [
      new THREE.Vector3(3.1, 0, 1.15),
      new THREE.Vector3(5.35, 0, 2.55),
      new THREE.Vector3(2.25, 0, 3.95),
      new THREE.Vector3(5.65, 0, -1.85),
    ];

    for (const position of tables) {
      const table = this.box('table', [1.15, 0.18, 0.85], [position.x, 0.45, position.z], 0x55a8c4);
      const leg = this.box('table leg', [0.18, 0.74, 0.18], [position.x, 0.1, position.z], 0x263342);
      this.scene.add(table, leg);
      this.addStaticCollider(position.x, position.z, 0.68, 0.52);

      const chairOffsets = [
        new THREE.Vector3(-0.82, 0, 0),
        new THREE.Vector3(0.82, 0, 0),
        new THREE.Vector3(0, 0, -0.68),
      ];
      for (const offset of chairOffsets) {
        const chair = this.box('chair', [0.36, 0.45, 0.36], [position.x + offset.x, 0.23, position.z + offset.z], 0x2f80ed);
        this.scene.add(chair);
      }
    }
  }

  private createStations() {
    this.createMachineStation();
    this.createPackingStation();
    this.createSalesStation();
    this.createPickupStation();
    this.createHrOffice();
    this.createUpgradeOffice();
  }

  private createMachineStation() {
    const station = new THREE.Group();
    station.position.copy(ZONES[0].position);

    const base = this.box('machine base', [1.6, 0.55, 1.35], [0, 0.28, 0], 0x5b879a);
    const machine = this.box('coffee machine body', [1.1, 1.35, 0.85], [0, 1.08, -0.05], 0x334e68);
    const panel = this.box('machine panel', [0.78, 0.45, 0.06], [0, 1.2, 0.41], 0x56ccf2);
    const tray = this.box('machine tray', [1.25, 0.12, 0.65], [0, 0.72, 0.56], 0x23313f);

    const pipeA = new THREE.Mesh(
      new THREE.CylinderGeometry(0.08, 0.08, 0.52, 16),
      new THREE.MeshStandardMaterial({ color: 0x161a22, roughness: 0.4 }),
    );
    pipeA.position.set(-0.22, 1.64, 0.16);
    pipeA.rotation.z = Math.PI / 2;
    pipeA.castShadow = true;
    const pipeB = pipeA.clone();
    pipeB.position.x = 0.22;

    station.add(base, machine, panel, tray, pipeA, pipeB);
    this.scene.add(station);
    this.addStaticCollider(ZONES[0].position.x, ZONES[0].position.z, 0.9, 0.78);

    this.machineLabel = this.createBillboardLabel(`LV.${this.machineLevel} MACHINE`, 0x2f80ed, 0xffffff, 1.85, 0.42);
    this.machineLabel.position.set(ZONES[0].position.x, 2.25, ZONES[0].position.z - 0.22);
    this.scene.add(this.machineLabel);
  }

  private createPackingStation() {
    const station = new THREE.Group();
    station.position.copy(ZONES[1].position);

    const table = this.box('packing table', [1.85, 0.55, 1.15], [0, 0.34, 0], 0x00a884);
    const boxes = [
      this.box('package stack', [0.42, 0.22, 0.42], [-0.42, 0.82, -0.18], 0xf2994a),
      this.box('package stack', [0.42, 0.22, 0.42], [0.02, 0.82, 0.16], 0xf2c94c),
      this.box('tape unit', [0.36, 0.28, 0.42], [0.55, 0.86, -0.1], 0x2f80ed),
    ];
    station.add(table, ...boxes);
    this.scene.add(station);
    this.addStaticCollider(ZONES[1].position.x, ZONES[1].position.z, 1.05, 0.7);
  }

  private createSalesStation() {
    const station = new THREE.Group();
    station.position.copy(ZONES[2].position);

    const counter = this.box('sales counter', [2.0, 0.85, 1.1], [0, 0.43, 0], 0x2f80ed);
    const register = this.box('register', [0.48, 0.26, 0.34], [0.55, 1.0, -0.1], 0x1f2937);
    const display = this.box('register display', [0.36, 0.22, 0.04], [0.55, 1.18, -0.29], 0x6ee7b7);
    const sign = this.createBillboardLabel('WALK-IN SALES', 0xf2c94c, 0x202124, 1.8, 0.36);
    sign.position.set(0, 1.58, 0.1);
    station.add(counter, register, display, sign);
    this.scene.add(station);
    this.addStaticCollider(ZONES[2].position.x, ZONES[2].position.z, 1.12, 0.68);
  }

  private createPickupStation() {
    const shelf = new THREE.Group();
    shelf.position.copy(ZONES[3].position);

    const base = this.box('pickup shelf base', [1.8, 0.62, 0.92], [0, 0.31, 0], 0x2f80ed);
    const top = this.box('pickup shelf top', [1.86, 0.14, 0.98], [0, 0.74, 0], 0x56ccf2);
    const sign = this.createBillboardLabel('PICKUP', 0xeb5757, 0xffffff, 1.4, 0.4);
    sign.position.set(0, 1.35, 0);
    shelf.add(base, top, sign);
    this.scene.add(shelf);
    this.addStaticCollider(ZONES[3].position.x, ZONES[3].position.z, 1.02, 0.58);
  }

  private createHrOffice() {
    const office = new THREE.Group();
    office.position.copy(ZONES[4].position);

    const desk = this.box('hr desk', [1.45, 0.62, 0.78], [0, 0.31, 0], 0x6fcf97);
    const computer = this.box('hr computer', [0.38, 0.26, 0.06], [-0.25, 0.82, -0.22], 0x1f2937);
    const manager = this.createCharacter(0xff9f80, 0x2f80ed);
    manager.position.set(0.52, 0, 0.42);
    manager.scale.setScalar(0.82);
    office.add(desk, computer, manager);
    this.scene.add(office);
    this.addStaticCollider(ZONES[4].position.x, ZONES[4].position.z, 0.82, 0.52);

    this.hrLabel = this.createBillboardLabel(`${this.employees} EMPLOYEES`, 0x27ae60, 0xffffff, 1.6, 0.42);
    this.hrLabel.position.set(ZONES[4].position.x, 2.25, ZONES[4].position.z - 0.22);
    this.scene.add(this.hrLabel);
  }

  private createUpgradeOffice() {
    const room = new THREE.Group();
    room.position.copy(ZONES[5].position);

    const terminal = this.box('upgrade terminal', [1.52, 0.82, 0.86], [0, 0.41, 0], 0x9b51e0);
    const screen = this.box('upgrade screen', [0.8, 0.42, 0.06], [0, 1.04, -0.38], 0xe0c3ff);
    const coins = [
      this.box('upgrade cash', [0.32, 0.13, 0.32], [-0.42, 0.92, 0.1], 0x6fcf97),
      this.box('upgrade cash', [0.32, 0.13, 0.32], [-0.1, 0.95, 0.1], 0x6fcf97),
      this.box('upgrade cash', [0.32, 0.13, 0.32], [0.22, 0.98, 0.1], 0x6fcf97),
    ];
    room.add(terminal, screen, ...coins);
    this.scene.add(room);
    this.addStaticCollider(ZONES[5].position.x, ZONES[5].position.z, 0.9, 0.58);
  }

  private createPizzaExpansion() {
    this.pizzaStationGroup.position.copy(ZONES[6].position);
    this.scene.add(this.pizzaStationGroup);
    this.addStaticCollider(ZONES[6].position.x, ZONES[6].position.z, 0.9, 0.68);
    this.updatePizzaStationVisuals();
  }

  private createZones() {
    for (const zone of ZONES) {
      const ring = new THREE.Mesh(
        new THREE.RingGeometry(zone.radius * 0.72, zone.radius, 52),
        new THREE.MeshBasicMaterial({
          color: zone.color,
          transparent: true,
          opacity: 0.58,
          side: THREE.DoubleSide,
        }),
      );
      ring.rotation.x = -Math.PI / 2;
      ring.position.set(zone.position.x, 0.055, zone.position.z);
      this.zoneRings.set(zone.id, ring);
      this.scene.add(ring);

      const floor = this.createFloorSign(zone.label, zone.color, 0xffffff, zone.radius * 1.8, 0.58);
      floor.position.copy(this.getZoneFloorSignPosition(zone));
      this.scene.add(floor);
    }

    const quickRoute = this.createFloorSign('MACHINE -> SALES   |   MACHINE -> PACK -> PICKUP', 0xffffff, 0x243447, 5.9, 0.48);
    quickRoute.position.set(-1.95, 0.07, 0.55);
    this.scene.add(quickRoute);
  }

  private createPlayer() {
    this.player.name = 'Player barista';

    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(0.48, 0.035, 8, 36),
      new THREE.MeshBasicMaterial({ color: 0x27ae60 }),
    );
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 0.05;

    const body = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.31, 0.58, 5, 14),
      new THREE.MeshStandardMaterial({ color: 0x2f80ed, roughness: 0.55 }),
    );
    body.position.y = 0.83;
    body.castShadow = true;

    const apron = this.box('barista apron', [0.42, 0.38, 0.08], [0, 0.78, 0.3], 0xeb5757);
    const head = new THREE.Mesh(
      new THREE.SphereGeometry(0.22, 18, 18),
      new THREE.MeshStandardMaterial({ color: 0xffc9a5, roughness: 0.48 }),
    );
    head.position.y = 1.35;
    head.castShadow = true;

    const cap = new THREE.Mesh(
      new THREE.CylinderGeometry(0.23, 0.25, 0.12, 18),
      new THREE.MeshStandardMaterial({ color: 0xeb5757, roughness: 0.55 }),
    );
    cap.position.y = 1.52;
    cap.castShadow = true;

    this.carryStackGroup.position.set(0.42, 0.93, 0.18);

    this.player.add(ring, body, apron, head, cap, this.carryStackGroup);
    this.scene.add(this.player);
  }

  private createCourierVan() {
    const body = this.box('courier van body', [1.65, 0.82, 0.95], [0, 0.48, 0], 0xeb5757);
    const cab = this.box('courier van cab', [0.78, 0.7, 0.92], [-0.74, 0.6, 0], 0xff8a8a);
    const window = this.box('courier van window', [0.36, 0.26, 0.96], [-0.94, 0.82, 0], 0xdff8ff);
    const sign = this.createBillboardLabel('COURIER', 0xeb5757, 0xffffff, 1.12, 0.3);
    sign.position.set(0.02, 1.18, 0);
    const wheelA = this.wheel(-0.55, -0.5);
    const wheelB = this.wheel(0.58, -0.5);
    const wheelC = this.wheel(-0.55, 0.5);
    const wheelD = this.wheel(0.58, 0.5);
    this.courierVan.add(body, cab, window, sign, wheelA, wheelB, wheelC, wheelD);
    this.courierVan.position.set(11.2, 0, 0.85);
    this.courierVan.visible = false;
    this.scene.add(this.courierVan);
  }

  private loop = () => {
    const dt = Math.min(this.clock.getDelta(), 0.05);
    this.update(dt);
    this.renderer.render(this.scene, this.camera);
    this.animationId = requestAnimationFrame(this.loop);
  };

  private update(dt: number) {
    this.updateCameraControls(dt);
    this.animateScene(dt);

    if (this.status === 'active') {
      this.updateBusinessClock(dt);
      this.updatePlayer(dt);
      this.updateMachine(dt);
      this.updateWalkInOrders(dt);
      this.updatePacking(dt);
      this.updateSales(dt);
      this.updateCourier(dt);
      this.updateRushCustomers(dt);
      this.updateEmployees(dt);
      this.updatePizzaMachine(dt);
      this.updateCashPiles();
      this.checkBankruptcy();
    }

    if (this.alert !== this.previousAlert) {
      this.previousAlert = this.alert;
      this.alertTimer = 2.4;
    }
    if (this.alertTimer > 0) {
      this.alertTimer = Math.max(0, this.alertTimer - dt);
    }

    this.emitTimer += dt;
    if (this.emitTimer >= 0.08) {
      this.emitTimer = 0;
      this.emitUi();
    }
  }

  private updateCameraControls(dt: number) {
    if (this.keys.has('KeyQ')) {
      this.targetCameraYaw = THREE.MathUtils.clamp(this.targetCameraYaw + dt * 1.15, -0.72, 0.72);
    }
    if (this.keys.has('KeyE')) {
      this.targetCameraYaw = THREE.MathUtils.clamp(this.targetCameraYaw - dt * 1.15, -0.72, 0.72);
    }

    this.cameraYaw = THREE.MathUtils.damp(this.cameraYaw, this.targetCameraYaw, 8, dt);
    this.cameraTilt = THREE.MathUtils.damp(this.cameraTilt, this.targetCameraTilt, 8, dt);

    const offset = this.baseCameraOffset.clone();
    offset.y += this.cameraTilt * 5.5;
    offset.applyAxisAngle(new THREE.Vector3(0, 1, 0), this.cameraYaw);

    this.camera.position.copy(this.cameraFocus).add(offset);
    this.camera.lookAt(this.cameraFocus);
  }

  private updateBusinessClock(dt: number) {
    const previousMinute = this.getMinuteOfDay();
    this.gameMinutes += dt * GAME_MINUTES_PER_SECOND;
    const currentMinute = this.getMinuteOfDay();

    if (!this.shiftClosed && this.crossedMinute(previousMinute, currentMinute, CLOSE_MINUTE)) {
      this.finishBusinessDay();
    }

    if (this.shiftClosed && this.crossedMinute(previousMinute, currentMinute, OPEN_MINUTE)) {
      this.startBusinessDay();
    }

    this.updateDayNightVisuals();
  }

  private updateDayNightVisuals() {
    const daylight = this.getDaylightFactor();
    const dayColor = new THREE.Color(0xa9d5f7);
    const nightColor = new THREE.Color(0x14213a);
    const background = nightColor.clone().lerp(dayColor, daylight);

    this.scene.background = background;
    if (this.scene.fog instanceof THREE.Fog) {
      this.scene.fog.color.copy(background);
      this.scene.fog.near = 22 + daylight * 6;
      this.scene.fog.far = 40 + daylight * 18;
    }

    this.ambientLight.intensity = 0.28 + daylight * 0.52;
    this.sunLight.intensity = 0.18 + daylight * 1.5;
    this.sunLight.color.copy(new THREE.Color(0xfff1d0).lerp(new THREE.Color(0xffffff), daylight));
    this.productionGlow.intensity = 1.2 - daylight * 0.35;
  }

  private getDaylightFactor() {
    const minute = this.getMinuteOfDay();
    const raw = Math.sin(((minute - 360) / 720) * Math.PI);
    return THREE.MathUtils.smoothstep(THREE.MathUtils.clamp(raw, 0, 1), 0, 1);
  }

  private animateScene(dt: number) {
    for (const [id, ring] of this.zoneRings) {
      ring.rotation.z += dt * (id === 'pickup' ? -0.75 : 0.55);
    }

    this.machineStockGroup.rotation.y = Math.sin(performance.now() * 0.0012) * 0.03;
    this.cashPileGroup.children.forEach((child, index) => {
      child.position.y += Math.sin(performance.now() * 0.002 + index) * 0.0008;
    });
  }

  private updatePlayer(dt: number) {
    const input = new THREE.Vector3();

    if (this.keys.has('KeyW') || this.keys.has('ArrowUp')) input.z -= 1;
    if (this.keys.has('KeyS') || this.keys.has('ArrowDown')) input.z += 1;
    if (this.keys.has('KeyA') || this.keys.has('ArrowLeft')) input.x -= 1;
    if (this.keys.has('KeyD') || this.keys.has('ArrowRight')) input.x += 1;

    if (input.lengthSq() > 0) {
      input.normalize();
      const speed = 4.25 + Math.min(1.35, (this.staffLevel - 1) * 0.22);
      this.playerVelocity.lerp(input.multiplyScalar(speed), 0.2);
      this.player.rotation.y = Math.atan2(this.playerVelocity.x, this.playerVelocity.z);
    } else {
      this.playerVelocity.lerp(new THREE.Vector3(), 0.24);
    }

    const movement = this.playerVelocity.clone().multiplyScalar(dt);
    this.moveWithCollisions(this.player, movement, this.playerRadius);
  }

  private updateMachine(dt: number) {
    if (this.machineStock < this.getMachineCapacity()) {
      this.machineTimer -= dt;
      if (this.machineTimer <= 0) {
        this.machineStock += 1;
        this.machineTimer = this.getMachineDuration();
        this.alert = 'Fresh coffee is ready on the machine tray.';
        this.updateMachineStockVisuals();
      }
    }

    const freeSlots = this.getCarryCapacity() - this.getCarriedTotal();
    if (freeSlots > 0 && this.machineStock > 0 && this.isPlayerInZone('machine')) {
      const pickedUp = Math.min(this.machineStock, freeSlots);
      this.machineStock -= pickedUp;
      this.carriedCoffees += pickedUp;
      this.alert = `Picked up ${pickedUp} coffee${pickedUp > 1 ? 's' : ''}. Carrying ${this.getCarriedTotal()}/${this.getCarryCapacity()}.`;
      this.updateMachineStockVisuals();
      this.updateCarryVisuals();
    }
  }

  private updateWalkInOrders(dt: number) {
    this.walkInTimer -= dt;
    if (this.walkInTimer <= 0) {
      this.walkInTimer = this.getWalkInSpawnInterval();
      if (this.walkIns.length < this.getMaxWalkInQueue()) {
        this.spawnWalkInOrder();
      }
    }

    for (let i = this.walkIns.length - 1; i >= 0; i -= 1) {
      const order = this.walkIns[i];
      this.updateWalkInMovement(order, i, dt);

      if (order.state !== 'queued') {
        order.bar.scale.x = 1;
        continue;
      }

      order.patience -= dt;
      const ratio = THREE.MathUtils.clamp(order.patience / order.maxPatience, 0, 1);
      order.bar.scale.x = ratio;

      if (order.patience <= 0) {
        this.scene.remove(order.mesh);
        this.walkIns.splice(i, 1);
        this.damageReputation('A walk-in customer waited too long.');
      }
    }
  }

  private updatePacking(dt: number) {
    if ((this.carriedCoffees > 0 || this.carriedPizzas > 0) && this.isPlayerInZone('packing')) {
      this.packingProgress += dt / this.getPackingDuration();
      this.alert = 'Packing items for courier delivery. Stay inside the PACK zone.';

      if (this.packingProgress >= 1) {
        this.packingProgress = 0;
        if (this.carriedPizzas > 0) {
          this.carriedPizzas -= 1;
          this.carriedPizzaPackages += 1;
        } else {
          this.carriedCoffees -= 1;
          this.carriedPackages += 1;
        }
        this.alert = `Package ready. (Packs: ${this.carriedPackages}, Pizza Packs: ${this.carriedPizzaPackages})`;
        this.updateCarryVisuals();
      }
      return;
    }

    if (this.packingProgress > 0) {
      this.packingProgress = Math.max(0, this.packingProgress - dt * 0.4);
    }
  }

  private updateSales(dt: number) {
    this.salesCooldown = Math.max(0, this.salesCooldown - dt);

    if (
      (this.carriedCoffees > 0 || this.carriedPizzas > 0) &&
      this.isWalkInReadyForSale() &&
      this.isPlayerInZone('sales') &&
      this.salesCooldown <= 0
    ) {
      let amount = 0;
      if (this.carriedPizzas > 0) {
        amount = 16 + Math.floor(this.staffLevel / 2);
        this.carriedPizzas -= 1;
      } else {
        amount = this.getWalkInSaleValue();
        this.carriedCoffees -= 1;
      }
      this.addRevenue(amount, 1);
      this.salesCooldown = 0.22;
      this.removeWalkIn(0);
      this.alert = `Walk-in sale completed. +$${amount}`;
      this.updateCarryVisuals();
    }
  }

  private updateCourier(dt: number) {
    this.pickupCooldown = Math.max(0, this.pickupCooldown - dt);

    if ((this.carriedPackages > 0 || this.carriedPizzaPackages > 0) && this.isPlayerInZone('pickup') && this.pickupCooldown <= 0) {
      const freeShelfSlots = this.getPickupShelfCapacity() - this.pickupShelfPackages;
      if (freeShelfSlots <= 0) {
        this.alert = 'PICKUP shelf is full. Wait for the courier before staging more packages.';
        this.pickupCooldown = 0.45;
        return;
      }

      const totalCarried = this.carriedPackages + this.carriedPizzaPackages;
      const stagedPizza = Math.min(this.carriedPizzaPackages, freeShelfSlots);
      this.carriedPizzaPackages -= stagedPizza;
      this.pickupShelfPackages += stagedPizza; // Store in generic shelf packages for simplicity, but paid better below? Actually, we'll just treat it as generic for the shelf to keep it simple and increase flat payout slightly.
      
      const freeAfterPizza = freeShelfSlots - stagedPizza;
      const stagedCoffee = Math.min(this.carriedPackages, freeAfterPizza);
      this.carriedPackages -= stagedCoffee;
      this.pickupShelfPackages += stagedCoffee;

      const totalStaged = stagedPizza + stagedCoffee;
      this.pickupCooldown = 0.35;
      
      this.alert =
        (this.carriedPackages + this.carriedPizzaPackages) > 0
          ? `${totalStaged} package(s) staged. Shelf full; ${this.carriedPackages + this.carriedPizzaPackages} still in hand.`
          : `${totalStaged} package(s) staged on PICKUP shelf. Courier will collect automatically.`;
      this.updateCarryVisuals();
      this.updatePickupShelfVisuals();
    }

    if (this.courierState === 'away') {
      this.courierTimer -= dt;
      if (this.courierTimer <= 0) {
        this.courierState = 'arriving';
        this.courierVan.visible = true;
        this.courierVan.position.set(11.2, 0, 0.85);
      }
      return;
    }

    if (this.courierState === 'arriving') {
      this.courierVan.position.x = Math.max(8.9, this.courierVan.position.x - dt * 3.2);
      if (this.courierVan.position.x <= 8.92) {
        this.courierState = 'waiting';
        this.courierPatience = this.getCourierPatienceDuration();
        this.alert = 'Courier arrived at PICKUP and is checking the shelf.';
        this.collectPickupShelfPackages();
      }
      return;
    }

    if (this.courierState === 'waiting') {
      if (this.collectPickupShelfPackages()) return;

      this.courierPatience -= dt;

      if (this.courierPatience <= 0) {
        this.damageReputation('Courier left because the PICKUP shelf was empty.');
        this.courierState = 'leaving';
      }
      return;
    }

    this.courierVan.position.x += dt * 3.6;
    if (this.courierVan.position.x > 11.1) {
      this.courierState = 'away';
      this.courierVan.visible = false;
      this.courierPatience = 0;
      this.courierTimer = Math.max(4.8, 10.5 - this.sales * 0.08);
    }
  }

  private updateRushCustomers(dt: number) {
    this.rushTimer -= dt;
    if (this.rushTimer <= 0) {
      this.spawnRushCustomer();
      this.rushTimer = Math.max(2.6, 5.8 - this.sales * 0.035);
    }

    for (let i = this.rushCustomers.length - 1; i >= 0; i -= 1) {
      const customer = this.rushCustomers[i];
      const target = customer.path[customer.targetIndex];
      customer.life -= dt;

      if (!target || customer.life <= 0) {
        this.scene.remove(customer.mesh);
        this.rushCustomers.splice(i, 1);
        continue;
      }

      const direction = target.clone().sub(customer.mesh.position);
      direction.y = 0;
      const distance = direction.length();

      if (distance <= 0.08) {
        customer.mesh.position.copy(target);
        customer.targetIndex += 1;
        if (customer.targetIndex >= customer.path.length) {
          this.scene.remove(customer.mesh);
          this.rushCustomers.splice(i, 1);
        }
        continue;
      }

      direction.normalize();
      customer.mesh.position.add(direction.clone().multiplyScalar(Math.min(distance, customer.speed * dt)));
      customer.mesh.rotation.y = Math.atan2(direction.x, direction.z);

      if (this.flatDistance(customer.mesh.position, this.player.position) < customer.radius + this.playerRadius) {
        this.scene.remove(customer.mesh);
        this.rushCustomers.splice(i, 1);

        if (this.getCarriedTotal() > 0) {
          this.carriedCoffees = 0;
          this.carriedPackages = 0;
          this.packingProgress = 0;
          this.updateCarryVisuals();
          this.damageReputation('You bumped into a rushing customer and dropped the order.');
        } else {
          this.alert = 'Careful. Rushing customers can knock orders out of your hands.';
        }
        continue;
      }
    }
  }

  private updateEmployees(dt: number) {
    for (const employee of this.employees) {
      if (employee.phase === 'waitMachine') {
        employee.wait -= dt;
        if (employee.wait <= 0) {
          employee.phase = 'toMachine';
        }
        continue;
      }

      if (employee.phase === 'waitSales') {
        employee.wait -= dt;
        if (employee.wait <= 0) {
          employee.phase = this.isWalkInReadyForSale() ? 'toSales' : 'waitSales';
          employee.wait = employee.phase === 'waitSales' ? 0.65 : 0;
        }
        continue;
      }

      if (employee.phase === 'waitPickup') {
        employee.wait -= dt;
        if (employee.wait <= 0) {
          employee.phase = this.pickupShelfPackages < this.getPickupShelfCapacity() ? 'toPickup' : 'waitPickup';
          employee.wait = employee.phase === 'waitPickup' ? 0.7 : 0;
        }
        continue;
      }

      if (employee.phase === 'pack') {
        employee.wait -= dt;
        employee.mesh.rotation.y += dt * 4.2;
        if (employee.wait <= 0) {
          employee.carrying = 'package';
          this.updateEmployeeCargo(employee);
          employee.phase = 'toPickup';
          this.alert = 'Employee packed a courier order.';
        }
        continue;
      }

      if (employee.phase === 'sell') {
        employee.wait -= dt;
        if (employee.wait <= 0) {
          employee.route = employee.route === 'sales' ? 'pickup' : 'sales';
          employee.phase = 'toMachine';
        }
        continue;
      }

      const target = this.getEmployeeTarget(employee);
      const direction = target.clone().sub(employee.mesh.position);
      direction.y = 0;
      const distance = direction.length();

      if (distance <= 0.08) {
        this.advanceEmployee(employee);
        continue;
      }

      direction.normalize();
      const step = Math.min(distance, this.getEmployeeMoveSpeed() * dt);
      this.moveEmployee(employee, direction.clone().multiplyScalar(step));
      employee.mesh.rotation.y = Math.atan2(direction.x, direction.z);
    }
  }

  private moveEmployee(employee: Employee, movement: THREE.Vector3) {
    employee.mesh.position.x = THREE.MathUtils.clamp(employee.mesh.position.x + movement.x, -FIELD_LIMIT_X + 0.28, FIELD_LIMIT_X - 0.28);
    employee.mesh.position.z = THREE.MathUtils.clamp(employee.mesh.position.z + movement.z, FIELD_MIN_Z + 0.28, FIELD_MAX_Z - 0.28);
  }

  private updatePizzaMachine(dt: number) {
    if (!this.pizzaUnlocked) return;

    if (this.pizzaStock < 6) {
      this.pizzaTimer -= dt;
      if (this.pizzaTimer <= 0) {
        this.pizzaStock += 1;
        this.pizzaTimer = 4.5;
        this.updatePizzaStationVisuals();
      }
    }

    const freeSlots = this.getCarryCapacity() - this.getCarriedTotal();
    if (freeSlots > 0 && this.pizzaStock > 0 && this.isPlayerInZone('pizza')) {
      const pickedUp = Math.min(this.pizzaStock, freeSlots);
      this.pizzaStock -= pickedUp;
      this.carriedPizzas += pickedUp;
      this.alert = `Picked up ${pickedUp} pizza${pickedUp > 1 ? 's' : ''}. Carrying ${this.getCarriedTotal()}/${this.getCarryCapacity()}.`;
      this.updatePizzaStationVisuals();
      this.updateCarryVisuals();
    }
  }
  private checkBankruptcy() {
    if (this.status === 'active' && this.cash <= -50) {
      this.status = 'gameOver';
      this.alert = 'Shop bankrupt. Cash reached -$50.';
      this.alertTimer = 3;
      this.playerVelocity.set(0, 0, 0);
    }
  }

  private spawnWalkInOrder() {
    const customer = this.createCharacter(0xffb703, 0x0f4c81);
    const barBack = this.box('patience bar back', [0.52, 0.06, 0.05], [0, 1.64, 0], 0xffffff, false, 1, false);
    const barFill = this.box('patience bar fill', [0.5, 0.07, 0.055], [0, 1.65, 0.01], 0x27ae60, false, 1, false);
    customer.add(barBack, barFill);
    customer.position.copy(WALK_IN_ENTRY_SPAWN);

    const patience = Math.max(13, 22 + this.staffLevel * 0.55 - this.sales * 0.025);
    this.walkIns.push({
      mesh: customer,
      bar: barFill,
      state: 'entering',
      pathIndex: 0,
      patience,
      maxPatience: patience,
    });
    this.scene.add(customer);
    this.alert = 'A walk-in customer is entering from the front door.';
  }

  private updateWalkInMovement(order: WalkInOrder, index: number, dt: number) {
    const queuePosition = this.getWalkInQueuePosition(index);
    const target =
      order.state === 'entering' && order.pathIndex < WALK_IN_ENTRY_PATH.length
        ? WALK_IN_ENTRY_PATH[order.pathIndex]
        : queuePosition;
    const direction = target.clone().sub(order.mesh.position);
    direction.y = 0;
    const distance = direction.length();

    if (distance <= 0.06) {
      order.mesh.position.copy(target);
      if (order.state === 'entering' && order.pathIndex < WALK_IN_ENTRY_PATH.length) {
        order.pathIndex += 1;
        return;
      }

      if (order.state !== 'queued') {
        order.state = 'queued';
        this.alert = 'Walk-in customer joined the SALES queue.';
      }
      order.mesh.rotation.y = Math.PI;
      return;
    }

    direction.normalize();
    const speed = order.state === 'entering' ? 1.35 : 1.05;
    const step = Math.min(distance, speed * dt);
    order.mesh.position.add(direction.multiplyScalar(step));
    order.mesh.rotation.y = Math.atan2(direction.x, direction.z);
  }

  private getWalkInQueuePosition(index: number) {
    return WALK_IN_QUEUE_POSITIONS[Math.min(index, WALK_IN_QUEUE_POSITIONS.length - 1)];
  }

  private isWalkInReadyForSale() {
    return this.walkIns[0]?.state === 'queued';
  }

  private addRevenue(amount: number, saleCount: number) {
    this.cash += amount;
    this.sales += saleCount;
    this.dayRevenue += amount;
    this.daySales += saleCount;
  }

  private removeWalkIn(index: number) {
    const [order] = this.walkIns.splice(index, 1);
    if (order) this.scene.remove(order.mesh);
  }

  private collectPickupShelfPackages() {
    if (this.courierState !== 'waiting' || this.pickupShelfPackages <= 0) return false;

    const collected = this.pickupShelfPackages;
    const amount = collected * this.getCourierSaleValue();
    this.addRevenue(amount, collected);
    this.dayPackages += collected;
    this.pickupShelfPackages = 0;
    this.courierState = 'leaving';
    this.courierPatience = 0;
    this.alert = `Courier collected ${collected} package${collected > 1 ? 's' : ''} from PICKUP shelf. +$${amount}`;
    this.updatePickupShelfVisuals();
    return true;
  }

  private spawnRushCustomer() {
    const route = RUSH_CUSTOMER_ROUTES[Math.floor(Math.random() * RUSH_CUSTOMER_ROUTES.length)];
    const mesh = this.createCharacter(0x8ecae6, 0x3d405b);
    mesh.scale.setScalar(0.88);
    mesh.position.copy(route[0]);

    const speed = 1.75 + Math.min(1.2, this.sales * 0.025);
    this.scene.add(mesh);
    this.rushCustomers.push({ mesh, path: route, targetIndex: 1, radius: 0.34, speed, life: 14 });
  }

  private hireEmployee() {
    const cost = this.getHireCost();
    if (!this.isPlayerInZone('hr')) {
      this.alert = 'Go to the HR room and press H to hire employees.';
      return;
    }
    if (this.employees.length >= this.getEmployeeLimit()) {
      this.alert = `HR capacity full (${this.employees.length}/${this.getEmployeeLimit()}). Upgrade staff training to hire more.`;
      return;
    }
    if (this.cash < cost) {
      this.alert = `Need $${cost} to hire an employee.`;
      return;
    }

    this.cash -= cost;
    const employeeMesh = this.createCharacter(0x6fcf97, 0x2f80ed);
    employeeMesh.position.set(-5.3 + this.employees.length * 0.28, 0, 3.85);
    const cargo = new THREE.Group();
    cargo.position.set(0.32, 0.88, 0.16);
    employeeMesh.add(cargo);
    this.scene.add(employeeMesh);

    this.employees.push({
      mesh: employeeMesh,
      cargo,
      phase: 'toMachine',
      route: this.employees.length % 2 === 0 ? 'sales' : 'pickup',
      carrying: 'none',
      wait: 0,
    });
    this.employees += 1;
    this.alert = `Hired employee ${this.employees}. They will automatically move coffee and packages.`;
    this.updateCashPiles(true);

    if (this.hrLabel) {
      this.updateLabelTexture(this.hrLabel, `${this.employees} EMPLOYEES`, 0x27ae60, 0xffffff, 1.6, 0.42);
    }
  }

  private unlockPizzaMachine() {
    if (!this.isPlayerInZone('pizza')) {
      this.alert = 'Go to the PIZZA $1000 area and press P.';
      return;
    }
    if (this.pizzaUnlocked) {
      this.alert = 'Pizza machine is already active.';
      return;
    }
    if (this.cash < this.pizzaUnlockCost) {
      this.alert = `Need $${this.pizzaUnlockCost} to unlock the pizza machine.`;
      return;
    }

    this.cash -= this.pizzaUnlockCost;
    this.pizzaUnlocked = true;
    this.pizzaRevenueTimer = 1.5;
    this.updatePizzaStationVisuals();
    this.updateCashPiles(true);
    this.alert = 'Pizza machine unlocked. Side income is now active.';
  }

  private upgradeMachine() {
    if (!this.isPlayerInZone('upgrade') && !this.isPlayerInZone('machine')) {
      this.alert = 'Go to UPGRADE or the machine zone, then press 1.';
      return;
    }
    this.buyMachineUpgrade();
  }

  private buyMachineUpgrade() {
    const cost = this.getMachineUpgradeCost();
    if (this.cash < cost) {
      this.alert = `Need $${cost} for the coffee machine upgrade.`;
      return;
    }

    this.cash -= cost;
    this.machineLevel += 1;
    this.machineTimer = Math.min(this.machineTimer, this.getMachineDuration());
    this.alert = `Coffee machine upgraded to level ${this.machineLevel}. Faster production and more tray capacity.`;
    this.updateCashPiles(true);
    
    if (this.machineLabel) {
      this.updateLabelTexture(this.machineLabel, `LV.${this.machineLevel} MACHINE`, 0x2f80ed, 0xffffff, 1.85, 0.42);
    }
  }

  private upgradePacking() {
    if (!this.isPlayerInZone('upgrade') && !this.isPlayerInZone('packing')) {
      this.alert = 'Go to UPGRADE or the PACK zone, then press 2.';
      return;
    }
    this.buyPackingUpgrade();
  }

  private buyPackingUpgrade() {
    const cost = this.getPackingUpgradeCost();
    if (this.cash < cost) {
      this.alert = `Need $${cost} for the packing upgrade.`;
      return;
    }

    this.cash -= cost;
    this.packingLevel += 1;
    this.alert = `Packing upgraded to level ${this.packingLevel}. Courier orders package faster.`;
    this.updateCashPiles(true);
  }

  private upgradeStaff() {
    if (!this.isPlayerInZone('upgrade') && !this.isPlayerInZone('hr')) {
      this.alert = 'Go to UPGRADE or HR, then press 3 for staff training.';
      return;
    }
    this.buyStaffUpgrade();
  }

  private buyStaffUpgrade() {
    const cost = this.getStaffUpgradeCost();
    if (this.cash < cost) {
      this.alert = `Need $${cost} for staff training.`;
      return;
    }

    this.cash -= cost;
    this.staffLevel += 1;
    this.alert = `Staff training upgraded to level ${this.staffLevel}. Movement and employees are faster.`;
    this.updateCashPiles(true);
  }

  private advanceEmployee(employee: Employee) {
    if (employee.phase === 'toMachine') {
      if (this.machineStock > 0) {
        this.machineStock -= 1;
        this.updateMachineStockVisuals();
        employee.carrying = 'coffee';
        this.updateEmployeeCargo(employee);
        employee.phase = employee.route === 'sales' ? 'toSales' : 'toPacking';
        this.alert = 'Employee picked up machine coffee.';
      } else {
        employee.phase = 'waitMachine';
        employee.wait = this.getEmployeeBrewDuration();
        this.alert = 'Employee is waiting for machine stock.';
      }
      return;
    }

    if (employee.phase === 'toPacking') {
      employee.phase = 'pack';
      employee.wait = Math.max(0.65, this.getPackingDuration() * 0.58);
      return;
    }

    if (employee.phase === 'toSales') {
      if (!this.isWalkInReadyForSale()) {
        employee.phase = 'waitSales';
        employee.wait = 0.65;
        this.alert = 'Employee is waiting for a walk-in customer.';
        return;
      }

      const amount = this.getEmployeeWalkInSaleValue();
      this.addRevenue(amount, 1);
      this.removeWalkIn(0);
      employee.carrying = 'none';
      this.updateEmployeeCargo(employee);
      employee.phase = 'sell';
      employee.wait = 0.35;
      this.alert = `Employee served a walk-in order. +$${amount}`;
      return;
    }

    if (employee.phase === 'toPickup') {
      if (this.pickupShelfPackages >= this.getPickupShelfCapacity()) {
        employee.phase = 'waitPickup';
        employee.wait = 0.7;
        this.alert = 'Employee is waiting because the PICKUP shelf is full.';
        return;
      }

      this.pickupShelfPackages += 1;
      this.updatePickupShelfVisuals();
      this.collectPickupShelfPackages();
      employee.carrying = 'none';
      this.updateEmployeeCargo(employee);
      employee.phase = 'sell';
      employee.wait = 0.35;
      if (this.courierState !== 'leaving') {
        this.alert = 'Employee staged a package on the PICKUP shelf.';
      }
    }
  }

  private getEmployeeTarget(employee: Employee) {
    if (employee.phase === 'toMachine') return new THREE.Vector3(-4.15, 0, -1.55);
    if (employee.phase === 'toPacking') return new THREE.Vector3(-2.15, 0, -1.0);
    if (employee.phase === 'toSales') return new THREE.Vector3(1.3, 0, -1.15);
    if (employee.phase === 'toPickup') return new THREE.Vector3(4.55, 0, 0.65);
    return employee.mesh.position.clone();
  }

  private damageReputation(message: string) {
    if (this.status !== 'active') return;
    const penalty = 8;
    this.cash -= penalty;
    this.alert = `${message} -$${penalty}`;
    this.checkBankruptcy();
  }

  private finishBusinessDay() {
    this.shiftClosed = true;

    if (this.dayRevenue >= this.dailyGoalTarget) {
      const bonus = 35 + this.businessDay * 10 + this.getShopLevel() * 5;
      this.cash += bonus;
      this.alert = `Day ${this.businessDay} goal complete. Revenue $${this.dayRevenue}/${this.dailyGoalTarget}. Bonus +$${bonus}`;
      this.updateCashPiles(true);
      return;
    }

    const penalty = 18 + this.businessDay * 6;
    this.cash -= penalty;
    this.alert = `Day ${this.businessDay} goal missed. Revenue $${this.dayRevenue}/${this.dailyGoalTarget}. Closing cost -$${penalty}`;
    this.updateCashPiles(true);
    this.checkBankruptcy();
  }

  private startBusinessDay() {
    this.businessDay += 1;
    this.dayRevenue = 0;
    this.daySales = 0;
    this.dayPackages = 0;
    this.dailyGoalTarget = this.calculateDailyGoalTarget();
    this.shiftClosed = false;
    this.walkInTimer = Math.min(this.walkInTimer, 1.4);
    this.alert = `Day ${this.businessDay} started. Daily revenue goal: $${this.dailyGoalTarget}.`;
  }

  private calculateDailyGoalTarget() {
    return 180 + (this.businessDay - 1) * 55 + (this.getShopLevel() - 1) * 28;
  }

  private crossedMinute(previous: number, current: number, target: number) {
    return previous <= current ? previous < target && current >= target : previous < target || current >= target;
  }

  private updateMachineStockVisuals() {
    this.machineStockGroup.clear();
    this.machineStockGroup.position.copy(ZONES[0].position);

    const visibleCount = Math.min(this.machineStock, 9);
    for (let i = 0; i < visibleCount; i += 1) {
      const cup = this.createCoffeeCup();
      const row = Math.floor(i / 3);
      const col = i % 3;
      cup.scale.setScalar(0.76);
      cup.position.set(-0.38 + col * 0.38, 0.82, 0.62 + row * 0.32);
      this.machineStockGroup.add(cup);
    }
  }

  private updatePickupShelfVisuals() {
    this.pickupShelfPackageGroup.clear();
    this.pickupShelfPackageGroup.position.copy(ZONES[3].position);

    const visiblePackages = Math.min(this.pickupShelfPackages, 8);
    for (let i = 0; i < visiblePackages; i += 1) {
      const pack = this.createPackage();
      const row = Math.floor(i / 4);
      const col = i % 4;
      pack.scale.setScalar(0.46);
      pack.position.set(-0.58 + col * 0.38, 0.86 + row * 0.18, -0.18 + row * 0.28);
      pack.rotation.y = (i % 2) * 0.24;
      this.pickupShelfPackageGroup.add(pack);
    }
  }

  private updateCashPiles(force = false) {
    const count = Math.max(0, Math.min(18, Math.floor(this.cash / 28)));
    if (!force && count === this.lastCashPileCount) return;

    this.lastCashPileCount = count;
    this.cashPileGroup.clear();
    this.cashPileGroup.position.set(2.9, 0, -1.5);

    for (let i = 0; i < count; i += 1) {
      const row = Math.floor(i / 6);
      const col = i % 6;
      const cash = this.box('cash pile', [0.34, 0.1, 0.22], [col * 0.24, 0.08 + row * 0.08, row * 0.28], 0x6fcf97);
      cash.rotation.y = (i % 2) * 0.35;
      this.cashPileGroup.add(cash);
    }
  }

  private updatePizzaStationVisuals() {
    this.pizzaStationGroup.clear();

    const base = this.box('pizza expansion base', [1.75, 0.24, 1.15], [0, 0.12, 0], this.pizzaUnlocked ? 0xff7f11 : 0x9aa7b2);
    const plate = new THREE.Mesh(
      new THREE.CylinderGeometry(0.42, 0.42, 0.08, 32),
      new THREE.MeshStandardMaterial({ color: this.pizzaUnlocked ? 0xf2c94c : 0xcbd5df, roughness: 0.62 }),
    );
    plate.position.set(0, 0.34, 0.14);
    plate.castShadow = true;

    if (!this.pizzaUnlocked) {
      const lock = this.createBillboardLabel('LOCKED $1000', 0xff7f11, 0xffffff, 1.55, 0.34);
      lock.position.set(0, 1.2, 0);
      const crate = this.box('locked pizza crate', [0.72, 0.55, 0.72], [0, 0.58, 0], 0x7d8790);
      this.pizzaStationGroup.add(base, plate, crate, lock);
      return;
    }

    const oven = this.box('pizza oven', [1.0, 0.78, 0.82], [0, 0.62, -0.08], 0x263342);
    const front = this.box('pizza oven firebox', [0.74, 0.32, 0.05], [0, 0.62, 0.35], 0xffb703);
    const label = this.createBillboardLabel('PIZZA ACTIVE', 0xff7f11, 0xffffff, 1.45, 0.34);
    label.position.set(0, 1.58, 0);
    this.pizzaStationGroup.add(base, oven, front, plate, label);
    
    for (let i = 0; i < this.pizzaStock; i += 1) {
      const pz = this.createPizzaMesh();
      pz.position.set(0, 0.44 + i * 0.08, 0.14);
      this.pizzaStationGroup.add(pz);
    }
  }

  private updateCarryVisuals() {
    this.carryStackGroup.clear();

    const visibleCoffees = Math.min(this.carriedCoffees, 5);
    const visiblePackages = Math.min(this.carriedPackages, 4);
    const visiblePizzas = Math.min(this.carriedPizzas, 3);
    const visiblePizzaPackages = Math.min(this.carriedPizzaPackages, 3);

    let currentY = 0;

    for (let i = 0; i < visibleCoffees; i += 1) {
      const cup = this.createCoffeeCup();
      const row = Math.floor(i / 2);
      const col = i % 2;
      cup.scale.setScalar(0.62);
      cup.position.set(col * 0.18, row * 0.18, 0);
      this.carryStackGroup.add(cup);
    }
    
    if (visibleCoffees > 0) {
      currentY = 0.48;
    }

    for (let i = 0; i < visiblePackages; i += 1) {
      const pack = this.createPackage();
      pack.scale.setScalar(0.42);
      pack.position.set(0.06 * (i % 2), currentY + i * 0.15, 0.02);
      this.carryStackGroup.add(pack);
    }
    
    if (visiblePackages > 0) {
      currentY += visiblePackages * 0.15 + 0.1;
    }

    for (let i = 0; i < visiblePizzas; i += 1) {
      const pz = this.createPizzaMesh();
      pz.scale.setScalar(0.4);
      pz.position.set(0, currentY + i * 0.08, 0);
      this.carryStackGroup.add(pz);
    }
    
    if (visiblePizzas > 0) {
      currentY += visiblePizzas * 0.08 + 0.1;
    }

    for (let i = 0; i < visiblePizzaPackages; i += 1) {
      const pPack = this.createPackage();
      pPack.scale.setScalar(0.42);
      pPack.position.set(0, currentY + i * 0.16, 0.02);
      this.carryStackGroup.add(pPack);
    }
  }

  private updateEmployeeCargo(employee: Employee) {
    employee.cargo.clear();

    if (employee.carrying === 'coffee') {
      const cup = this.createCoffeeCup();
      cup.scale.setScalar(0.58);
      employee.cargo.add(cup);
      return;
    }

    if (employee.carrying === 'package') {
      const pack = this.createPackage();
      pack.scale.setScalar(0.42);
      employee.cargo.add(pack);
    }
  }

  private clearDynamicObjects() {
    for (const order of this.walkIns) this.scene.remove(order.mesh);
    for (const customer of this.rushCustomers) this.scene.remove(customer.mesh);
    for (const employee of this.employees) this.scene.remove(employee.mesh);
    this.walkIns.length = 0;
    this.rushCustomers.length = 0;
    this.employees.length = 0;
  }

  private isPlayerInZone(id: ZoneId) {
    const zone = ZONES.find((item) => item.id === id);
    if (!zone) return false;
    return this.flatDistance(this.player.position, zone.position) <= zone.radius + this.playerRadius + 0.2;
  }

  private getZoneFloorSignPosition(zone: Zone) {
    const position = zone.position.clone();
    position.y = 0.065;

    if (zone.id === 'sales') position.set(0.45, 0.065, -1.05);
    else if (zone.id === 'pickup') position.set(5.75, 0.065, 2.05);
    else if (zone.id === 'pizza') position.set(3.7, 0.065, -2.55);
    else position.z += zone.radius * 0.92;

    return position;
  }

  private getCurrentZone() {
    return ZONES.find((zone) => this.flatDistance(this.player.position, zone.position) <= zone.radius + this.playerRadius + 0.2);
  }

  private getActiveMenu(): ActiveMenu {
    const zone = this.getCurrentZone();
    if (zone?.id === 'upgrade') return 'upgrade';
    if (zone?.id === 'hr') return 'hr';
    if (zone?.id === 'pizza') return 'pizza';
    return 'none';
  }

  private getObjective() {
    if (this.status === 'gameOver') return 'Press R to restart the shop.';
    if (this.carriedPackages > 0 && this.carriedCoffees === 0) {
      return 'Drop packaged coffee on the PICKUP shelf for courier collection.';
    }
    if (this.pickupShelfPackages > 0) return 'Pickup shelf is staged. Keep producing while the courier drives in.';
    if (this.carriedCoffees > 0) {
      if (this.walkIns.length > 0) return 'Sell coffee at SALES for quick cash.';
      return 'Pack coffee at PACK for the courier order.';
    }
    if (this.machineStock > 0) return 'Pick up fresh coffee from MACHINE.';
    if (this.cash >= this.getHireCost() && this.employees.length === 0) return 'Hire your first employee in HR.';
    return 'Wait for machine stock or upgrade the business.';
  }

  private getRouteHint() {
    if (this.carriedCoffees > 0) return 'Normal sale needs no package: go directly to SALES. Courier sale needs PACK first.';
    if (this.carriedPackages > 0) return 'Leave packages on the PICKUP shelf. The courier collects staged orders automatically.';
    if (this.pickupShelfPackages > 0) return `PICKUP shelf has ${this.pickupShelfPackages} package${this.pickupShelfPackages > 1 ? 's' : ''} waiting for the courier.`;
    if (this.courierState === 'waiting') return 'Courier is at PICKUP. Stage a packaged coffee on the shelf.';
    return 'Core loop: MACHINE -> SALES, or MACHINE -> PACK -> PICKUP. HR hires workers.';
  }

  private getPrompt() {
    if (this.status === 'gameOver') return 'Shop closed. Press R to restart.';

    const zone = this.getCurrentZone();
    if (!zone) return 'Follow floor labels. WASD moves the barista. Drag, Q/E rotate camera; C resets it.';

    if (zone.id === 'machine') {
      return this.machineStock > 0
        ? 'MACHINE: coffee pickup is automatic.'
        : `MACHINE: producing coffee. Press 1 here or in UPGRADE to upgrade for $${this.getMachineUpgradeCost()}.`;
    }

    if (zone.id === 'packing') {
      return this.carriedCoffees > 0
        ? 'PACK: stay here until the bar fills to prepare a courier package.'
        : `PACK: press 2 here or in UPGRADE to upgrade for $${this.getPackingUpgradeCost()}.`;
    }

    if (zone.id === 'sales') {
      return this.carriedCoffees > 0
        ? 'SALES: unpacked coffee sells here to walk-in customers.'
        : 'SALES: bring fresh coffee here when customers are waiting.';
    }

    if (zone.id === 'pickup') {
      if (this.carriedPackages > 0) return 'PICKUP: package drop-off is automatic. Courier collects the shelf.';
      if (this.pickupShelfPackages > 0) return `PICKUP: ${this.pickupShelfPackages} package${this.pickupShelfPackages > 1 ? 's' : ''} staged for courier pickup.`;
      return 'PICKUP: bring packaged coffee here and leave it on the shelf.';
    }

    if (zone.id === 'hr') return `HR: press H to hire for $${this.getHireCost()}, or 3 for staff training.`;
    if (zone.id === 'upgrade') return 'UPGRADE: press 1 machine, 2 packing, 3 staff training.';
    return this.pizzaUnlocked ? 'PIZZA: machine is active and generating side income.' : 'PIZZA: press P here to unlock the pizza machine for $1000.';
  }

  private getCourierStatus() {
    if (this.courierState === 'away') return 'Away';
    if (this.courierState === 'arriving') return 'Arriving';
    if (this.courierState === 'waiting') return 'Waiting';
    return 'Leaving';
  }

  private getShopLevel() {
    return Math.max(1, Math.floor(this.sales / 8) + Math.floor((this.machineLevel + this.packingLevel + this.staffLevel) / 5));
  }

  private getEmployeeLimit() {
    return Math.min(5, 2 + Math.floor((this.staffLevel - 1) / 2));
  }

  private getEmployeeMoveSpeed() {
    return 2.05 + Math.min(0.85, Math.sqrt(this.staffLevel) * 0.23);
  }

  private getPickupShelfCapacity() {
    return Math.min(14, BASE_PICKUP_SHELF_CAPACITY + Math.floor((this.packingLevel - 1) / 2));
  }

  private getMaxWalkInQueue() {
    return Math.min(WALK_IN_QUEUE_POSITIONS.length, BASE_WALK_IN_QUEUE + Math.floor((this.machineLevel + this.staffLevel - 2) / 2));
  }

  private getWalkInSpawnInterval() {
    const demandLevel = this.machineLevel * 0.52 + this.staffLevel * 0.32 + this.getShopLevel() * 0.22 + this.sales * 0.012;
    const baseInterval = Math.max(1.35, 6.6 - demandLevel);
    return Math.min(9, baseInterval / this.getTimeDemandMultiplier());
  }

  private getTimeDemandMultiplier() {
    const minute = this.getMinuteOfDay();
    if (minute >= 11 * 60 && minute < 14 * 60) return 1.2;
    if (minute >= OPEN_MINUTE && minute < 18 * 60) return 1;
    if (minute >= 18 * 60 && minute < CLOSE_MINUTE) return 0.78;
    return 0.42;
  }

  private getMachineCapacity() {
    return Math.min(8, 2 + this.machineLevel);
  }

  private getCarryCapacity() {
    return Math.min(8, 3 + this.staffLevel);
  }

  private getCarriedTotal() {
    return this.carriedCoffees + this.carriedPackages + this.carriedPizzas + this.carriedPizzaPackages;
  }

  private getMachineDuration() {
    return Math.max(0.85, 3.8 - (this.machineLevel - 1) * 0.36);
  }

  private getPackingDuration() {
    return Math.max(0.75, 2.55 - (this.packingLevel - 1) * 0.25);
  }

  private getEmployeeBrewDuration() {
    return Math.max(0.8, 1.5 - this.machineLevel * 0.08);
  }

  private getCourierPatienceDuration() {
    return Math.max(9, 19 - this.sales * 0.05);
  }

  private getWalkInSaleValue() {
    return 12 + this.machineLevel * 2 + Math.floor(this.staffLevel / 2);
  }

  private getEmployeeWalkInSaleValue() {
    return Math.max(8, Math.floor(this.getWalkInSaleValue() * 0.62));
  }

  private getCourierSaleValue() {
    return 24 + this.packingLevel * 3 + Math.floor(this.staffLevel / 2);
  }

  private getMachineUpgradeCost() {
    return 45 + (this.machineLevel - 1) * 42;
  }

  private getPackingUpgradeCost() {
    return 55 + (this.packingLevel - 1) * 46;
  }

  private getStaffUpgradeCost() {
    return 90 + (this.staffLevel - 1) * 80 + Math.floor((this.staffLevel - 1) ** 2 * 12);
  }

  private getHireCost() {
    return 110 + this.employees.length * 110 + this.employees.length ** 2 * 35;
  }

  private getMinuteOfDay() {
    return Math.floor(((this.gameMinutes % MINUTES_PER_DAY) + MINUTES_PER_DAY) % MINUTES_PER_DAY);
  }

  private getClockLabel() {
    const minute = this.getMinuteOfDay();
    const hours = Math.floor(minute / 60).toString().padStart(2, '0');
    const minutes = (minute % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  private getDayPhase() {
    const minute = this.getMinuteOfDay();
    if (minute >= 6 * 60 && minute < 11 * 60) return 'Morning';
    if (minute >= 11 * 60 && minute < 18 * 60) return 'Day';
    if (minute >= 18 * 60 && minute < CLOSE_MINUTE) return 'Evening';
    return 'Night';
  }

  private emitUi(force = false) {
    const machineProgress =
      this.machineStock >= this.getMachineCapacity()
        ? 1
        : 1 - THREE.MathUtils.clamp(this.machineTimer / this.getMachineDuration(), 0, 1);
    const courierPatience =
      this.courierState === 'waiting'
        ? THREE.MathUtils.clamp(this.courierPatience / this.getCourierPatienceDuration(), 0, 1)
        : 0;

    if (!force && this.status === 'gameOver' && this.emitTimer !== 0) return;

    this.onUiChange({
      status: this.status,
      shopLevel: this.getShopLevel(),
      businessDay: this.businessDay,
      clockLabel: this.getClockLabel(),
      dayPhase: this.getDayPhase(),
      dailyRevenue: this.dayRevenue,
      dailyGoalTarget: this.dailyGoalTarget,
      dailyProgress: THREE.MathUtils.clamp(this.dayRevenue / this.dailyGoalTarget, 0, 1),
      dailyGoalMet: this.dayRevenue >= this.dailyGoalTarget,
      cash: Math.floor(this.cash),
      sales: this.sales,
      reputation: this.reputation,
      carrying: this.getCarryingLabel(),
      coffeeStock: this.machineStock,
      walkInQueue: this.walkIns.length,
      maxWalkInQueue: this.getMaxWalkInQueue(),
      machineLevel: this.machineLevel,
      packingLevel: this.packingLevel,
      staffLevel: this.staffLevel,
      employees: this.employees.length,
      employeeLimit: this.getEmployeeLimit(),
      machineProgress,
      packingProgress: this.packingProgress,
      courierPatience,
      courierStatus: this.getCourierStatus(),
      pickupShelfPackages: this.pickupShelfPackages,
      activeMenu: this.getActiveMenu(),
      pizzaUnlocked: this.pizzaUnlocked,
      pizzaUnlockCost: this.pizzaUnlockCost,
      objective: this.getObjective(),
      routeHint: this.getRouteHint(),
      prompt: this.getPrompt(),
      alert: this.alertTimer > 0 ? this.alert : '',
      machineUpgradeCost: this.getMachineUpgradeCost(),
      packingUpgradeCost: this.getPackingUpgradeCost(),
      staffUpgradeCost: this.getStaffUpgradeCost(),
      hireCost: this.getHireCost(),
      courierWaiting: this.courierState === 'waiting',
    });
  }

  private getCarryingLabel() {
    const parts = [];
    if (this.carriedCoffees > 0) parts.push(`Coffee x${this.carriedCoffees}`);
    if (this.carriedPackages > 0) parts.push(`Pack x${this.carriedPackages}`);
    if (this.carriedPizzas > 0) parts.push(`Pizza x${this.carriedPizzas}`);
    if (this.carriedPizzaPackages > 0) parts.push(`PizzaPack x${this.carriedPizzaPackages}`);
    return parts.length > 0 ? parts.join(', ') : 'Empty';
  }

  private flatDistance(a: THREE.Vector3, b: THREE.Vector3) {
    const dx = a.x - b.x;
    const dz = a.z - b.z;
    return Math.sqrt(dx * dx + dz * dz);
  }

  private addStaticCollider(x: number, z: number, halfX: number, halfZ: number) {
    this.staticColliders.push({
      center: new THREE.Vector3(x, 0, z),
      halfX,
      halfZ,
    });
  }

  private moveWithCollisions(mesh: THREE.Group, movement: THREE.Vector3, radius: number) {
    const nextX = mesh.position.clone();
    nextX.x = THREE.MathUtils.clamp(nextX.x + movement.x, -FIELD_LIMIT_X + radius, FIELD_LIMIT_X - radius);
    if (!this.collidesWithStatic(nextX, radius)) {
      mesh.position.x = nextX.x;
    } else if (mesh === this.player) {
      this.playerVelocity.x = 0;
    }

    const nextZ = mesh.position.clone();
    nextZ.z = THREE.MathUtils.clamp(nextZ.z + movement.z, FIELD_MIN_Z + radius, FIELD_MAX_Z - radius);
    if (!this.collidesWithStatic(nextZ, radius)) {
      mesh.position.z = nextZ.z;
    } else if (mesh === this.player) {
      this.playerVelocity.z = 0;
    }
  }

  private collidesWithStatic(position: THREE.Vector3, radius: number) {
    return this.staticColliders.some((collider) => {
      const closestX = THREE.MathUtils.clamp(position.x, collider.center.x - collider.halfX, collider.center.x + collider.halfX);
      const closestZ = THREE.MathUtils.clamp(position.z, collider.center.z - collider.halfZ, collider.center.z + collider.halfZ);
      const dx = position.x - closestX;
      const dz = position.z - closestZ;
      return dx * dx + dz * dz < radius * radius;
    });
  }

  private createCoffeeCup() {
    const group = new THREE.Group();
    const cup = new THREE.Mesh(
      new THREE.CylinderGeometry(0.16, 0.12, 0.33, 18),
      new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.44 }),
    );
    cup.position.y = 0.17;
    cup.castShadow = true;

    const sleeve = new THREE.Mesh(
      new THREE.CylinderGeometry(0.165, 0.13, 0.12, 18),
      new THREE.MeshStandardMaterial({ color: 0x7b4f38, roughness: 0.75 }),
    );
    sleeve.position.y = 0.16;

    const lid = new THREE.Mesh(
      new THREE.CylinderGeometry(0.17, 0.17, 0.05, 18),
      new THREE.MeshStandardMaterial({ color: 0xf2f6f7, roughness: 0.32 }),
    );
    lid.position.y = 0.37;
    group.add(cup, sleeve, lid);
    return group;
  }

  private createPackage() {
    const group = new THREE.Group();
    const parcel = new THREE.Mesh(
      new THREE.BoxGeometry(0.48, 0.34, 0.48),
      new THREE.MeshStandardMaterial({ color: 0xf2994a, roughness: 0.72 }),
    );
    parcel.castShadow = true;
    const label = new THREE.Mesh(
      new THREE.BoxGeometry(0.51, 0.065, 0.51),
      new THREE.MeshStandardMaterial({ color: 0x2f80ed, roughness: 0.42 }),
    );
    label.position.y = 0.03;
    group.add(parcel, label);
    return group;
  }

  private createPizzaMesh() {
    const group = new THREE.Group();
    const crust = new THREE.Mesh(
      new THREE.CylinderGeometry(0.36, 0.36, 0.06, 32),
      new THREE.MeshStandardMaterial({ color: 0xd99235, roughness: 0.68 }),
    );
    crust.castShadow = true;

    const cheese = new THREE.Mesh(
      new THREE.CylinderGeometry(0.31, 0.31, 0.065, 32),
      new THREE.MeshStandardMaterial({ color: 0xf7d76d, roughness: 0.55 }),
    );
    cheese.position.y = 0.025;
    cheese.castShadow = true;
    group.add(crust, cheese);

    const toppingMaterial = new THREE.MeshStandardMaterial({ color: 0xeb5757, roughness: 0.5 });
    const toppingPositions = [
      [-0.14, 0.08],
      [0.1, 0.12],
      [0.16, -0.08],
      [-0.05, -0.14],
    ];
    for (const [x, z] of toppingPositions) {
      const topping = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.025, 12), toppingMaterial);
      topping.position.set(x, 0.075, z);
      topping.castShadow = true;
      group.add(topping);
    }

    return group;
  }

  private createCharacter(bodyColor: number, apronColor: number) {
    const group = new THREE.Group();

    const body = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.25, 0.46, 5, 12),
      new THREE.MeshStandardMaterial({ color: bodyColor, roughness: 0.54 }),
    );
    body.position.y = 0.78;
    body.castShadow = true;

    const apron = this.box('character apron', [0.34, 0.3, 0.06], [0, 0.72, 0.24], apronColor);
    const head = new THREE.Mesh(
      new THREE.SphereGeometry(0.19, 16, 16),
      new THREE.MeshStandardMaterial({ color: 0xffc9a5, roughness: 0.48 }),
    );
    head.position.y = 1.18;
    head.castShadow = true;

    const cap = new THREE.Mesh(
      new THREE.CylinderGeometry(0.19, 0.2, 0.09, 16),
      new THREE.MeshStandardMaterial({ color: apronColor, roughness: 0.52 }),
    );
    cap.position.y = 1.32;
    cap.castShadow = true;
    group.add(body, apron, head, cap);
    return group;
  }

  private wheel(x: number, z: number) {
    const wheel = new THREE.Mesh(
      new THREE.CylinderGeometry(0.18, 0.18, 0.16, 18),
      new THREE.MeshStandardMaterial({ color: 0x1f2933, roughness: 0.72 }),
    );
    wheel.rotation.z = Math.PI / 2;
    wheel.position.set(x, 0.16, z);
    wheel.castShadow = true;
    return wheel;
  }

  private plane(size: [number, number], position: [number, number, number], color: number) {
    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(size[0], size[1]),
      new THREE.MeshStandardMaterial({ color, roughness: 0.76, metalness: 0.02 }),
    );
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.set(position[0], position[1], position[2]);
    mesh.receiveShadow = true;
    return mesh;
  }

  private box(
    name: string,
    size: [number, number, number],
    position: [number, number, number],
    color: number,
    transparent = false,
    opacity = 1,
    receiveShadow = true,
  ) {
    const mesh = new THREE.Mesh(
      new THREE.BoxGeometry(size[0], size[1], size[2]),
      new THREE.MeshStandardMaterial({
        color,
        roughness: 0.62,
        metalness: 0.03,
        transparent,
        opacity,
      }),
    );
    mesh.name = name;
    mesh.position.set(position[0], position[1], position[2]);
    mesh.castShadow = true;
    mesh.receiveShadow = receiveShadow;
    return mesh;
  }

  private createFloorSign(text: string, background: number, foreground: number, width: number, height: number) {
    const texture = this.createTextTexture(text, background, foreground, 512, 128, 54);
    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(width, height),
      new THREE.MeshBasicMaterial({ map: texture, transparent: true }),
    );
    mesh.rotation.x = -Math.PI / 2;
    return mesh;
  }

  private createBillboardLabel(text: string, background: number, foreground: number, width: number, height: number) {
    const texture = this.createTextTexture(text, background, foreground, 512, 128, 50);
    const material = new THREE.SpriteMaterial({ map: texture, transparent: true });
    const sprite = new THREE.Sprite(material);
    sprite.scale.set(width, height, 1);
    return sprite;
  }

  private updateLabelTexture(sprite: THREE.Sprite, text: string, background: number, foreground: number, width: number, height: number) {
    if (sprite.material.map) {
      sprite.material.map.dispose();
    }
    sprite.material.map = this.createTextTexture(text, background, foreground, 512, 128, 50);
    sprite.material.needsUpdate = true;
  }

  private createTextTexture(text: string, background: number, foreground: number, width: number, height: number, fontSize: number) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Could not create canvas texture.');

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = `#${background.toString(16).padStart(6, '0')}`;
    this.roundRect(ctx, 8, 8, width - 16, height - 16, 26);
    ctx.fill();

    ctx.strokeStyle = 'rgba(255,255,255,0.72)';
    ctx.lineWidth = 8;
    this.roundRect(ctx, 12, 12, width - 24, height - 24, 22);
    ctx.stroke();

    ctx.fillStyle = `#${foreground.toString(16).padStart(6, '0')}`;
    ctx.font = `900 ${fontSize}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, width / 2, height / 2 + 2, width - 52);

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  }

  private roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius: number) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.arcTo(x + width, y, x + width, y + height, radius);
    ctx.arcTo(x + width, y + height, x, y + height, radius);
    ctx.arcTo(x, y + height, x, y, radius);
    ctx.arcTo(x, y, x + width, y, radius);
    ctx.closePath();
  }

  private handleResize = () => {
    const width = Math.max(1, this.container.clientWidth);
    const height = Math.max(1, this.container.clientHeight);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height, false);
  };

  private handleKeyDown = (event: KeyboardEvent) => {
    if (
      event.code.startsWith('Arrow') ||
      event.code === 'Space' ||
      event.code === 'KeyW' ||
      event.code === 'KeyA' ||
      event.code === 'KeyS' ||
      event.code === 'KeyD' ||
      event.code === 'KeyQ' ||
      event.code === 'KeyE' ||
      event.code === 'KeyC'
    ) {
      event.preventDefault();
    }

    this.keys.add(event.code);
    if (event.repeat) return;

    if (event.code === 'KeyR') {
      this.restart();
      return;
    }

    if (this.status !== 'active') return;
    if (event.code === 'KeyC') {
      this.targetCameraYaw = 0;
      this.targetCameraTilt = 0;
      return;
    }
    if (event.code === 'Digit1') this.upgradeMachine();
    if (event.code === 'Digit2') this.upgradePacking();
    if (event.code === 'Digit3') this.upgradeStaff();
    if (event.code === 'KeyH') this.hireEmployee();
    if (event.code === 'KeyP') this.unlockPizzaMachine();
    this.emitUi(true);
  };

  private handleKeyUp = (event: KeyboardEvent) => {
    this.keys.delete(event.code);
  };

  private handlePointerDown = (event: PointerEvent) => {
    if (event.button !== 0 && event.button !== 2) return;

    this.isCameraDragging = true;
    this.cameraPointerId = event.pointerId;
    this.lastCameraPointerX = event.clientX;
    this.lastCameraPointerY = event.clientY;
    this.renderer.domElement.setPointerCapture(event.pointerId);
    event.preventDefault();
  };

  private handlePointerMove = (event: PointerEvent) => {
    if (!this.isCameraDragging || event.pointerId !== this.cameraPointerId) return;

    const dx = event.clientX - this.lastCameraPointerX;
    const dy = event.clientY - this.lastCameraPointerY;
    this.lastCameraPointerX = event.clientX;
    this.lastCameraPointerY = event.clientY;

    this.targetCameraYaw = THREE.MathUtils.clamp(this.targetCameraYaw - dx * 0.0042, -0.72, 0.72);
    this.targetCameraTilt = THREE.MathUtils.clamp(this.targetCameraTilt + dy * 0.003, -0.2, 0.24);
    event.preventDefault();
  };

  private handlePointerUp = (event: PointerEvent) => {
    if (event.pointerId !== this.cameraPointerId) return;

    this.isCameraDragging = false;
    this.cameraPointerId = -1;
    if (this.renderer.domElement.hasPointerCapture(event.pointerId)) {
      this.renderer.domElement.releasePointerCapture(event.pointerId);
    }
  };

  private handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
  };
}
