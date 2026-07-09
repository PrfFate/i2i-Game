import { useEffect, useRef, useState } from 'react';
import { CoffeeRushGame, type CoffeeRushUiState } from './game/CoffeeRushGame';

const initialUiState: CoffeeRushUiState = {
  status: 'active',
  shopLevel: 1,
  businessDay: 1,
  clockLabel: '08:00 AM',
  dayPhase: 'Morning',
  dailyRevenue: 0,
  dailyGoalTarget: 180,
  dailyProgress: 0,
  dailyGoalMet: false,
  cash: 120,
  sales: 0,
  reputation: 5,
  carrying: 'Empty',
  coffeeStock: 0,
  walkInQueue: 0,
  maxWalkInQueue: 4,
  machineLevel: 1,
  packingLevel: 1,
  staffLevel: 1,
  employees: 0,
  employeeLimit: 2,
  machineProgress: 0,
  packingProgress: 0,
  courierPatience: 0,
  courierStatus: 'Away',
  pickupShelfPackages: 0,
  activeMenu: 'none',
  pizzaUnlocked: false,
  pizzaUnlockCost: 1000,
  objective: 'Start the shift',
  routeHint: 'Machine -> Sales, or Machine -> Pack -> Pickup',
  prompt: 'Move with WASD or arrow keys. Drag, Q/E rotate camera; C resets it.',
  alert: 'Coffee machine is warming up.',
  machineUpgradeCost: 45,
  packingUpgradeCost: 55,
  staffUpgradeCost: 70,
  hireCost: 80,
  courierWaiting: false,
};

function App() {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const gameRef = useRef<CoffeeRushGame | null>(null);
  const [ui, setUi] = useState<CoffeeRushUiState>(initialUiState);

  useEffect(() => {
    if (!mountRef.current) return;

    const game = new CoffeeRushGame(mountRef.current, setUi);
    gameRef.current = game;
    game.start();

    return () => {
      game.dispose();
      gameRef.current = null;
    };
  }, []);

  return (
    <main className="game-shell">
      <div ref={mountRef} className="canvas-host" aria-label="Coffee Ready 3D game canvas" />

      <section className="cash-pill">
        <span>$</span>
        <strong>{ui.cash}</strong>
      </section>

      <section className="daily-tasks">
        <div className="time-header">
          <strong>Day {ui.businessDay}</strong>
          <span>{ui.clockLabel}</span>
        </div>
        <div className="task-body">
          <div className="task-row">
            <span>Daily Sales Goal:</span>
            <strong className={ui.dailyGoalMet ? 'success' : ''}>${ui.dailyProgress} / ${ui.dailyGoalTarget}</strong>
          </div>
          {ui.dailyGoalMet && <div className="goal-met">Goal Met!</div>}
          <div className="objective">
            <em>Task: {ui.objective}</em>
          </div>
        </div>
      </section>

      {ui.activeMenu === 'upgrade' && (
        <section className="zone-menu">
          <div className="zone-menu__title">
            <span>Upgrade</span>
            <strong>Business Lv {ui.shopLevel}</strong>
          </div>
          <UpgradeRow
            label="Coffee Machine"
            level={ui.machineLevel}
            cost={ui.machineUpgradeCost}
            keyName="1"
            onClick={() => gameRef.current?.upgradeMachineAction()}
          />
          <UpgradeRow
            label="Packing Speed"
            level={ui.packingLevel}
            cost={ui.packingUpgradeCost}
            keyName="2"
            onClick={() => gameRef.current?.upgradePackingAction()}
          />
          <UpgradeRow
            label="Staff Speed"
            level={ui.staffLevel}
            cost={ui.staffUpgradeCost}
            keyName="3"
            onClick={() => gameRef.current?.upgradeStaffAction()}
          />
        </section>
      )}

      {ui.activeMenu === 'hr' && (
        <section className="zone-menu">
          <div className="zone-menu__title">
            <span>HR Department</span>
            <strong>{ui.employees} Employees</strong>
          </div>
          <div className="upgrade-row">
            <span>Hire Worker</span>
            <strong>Auto sales</strong>
            <kbd>H</kbd>
            <button onClick={() => gameRef.current?.hireEmployeeAction()}>${ui.hireCost}</button>
          </div>
          <div className="menu-hint">Workers carry coffee between machine, sales, pack and pickup.</div>
        </section>
      )}

      {ui.activeMenu === 'pizza' && (
        <section className="zone-menu">
          <div className="zone-menu__title">
            <span>Pizza Expansion</span>
            <strong>{ui.pizzaUnlocked ? 'Unlocked' : 'Locked'}</strong>
          </div>
          {ui.pizzaUnlocked ? (
            <div className="menu-hint">Pizza machine is active. It adds automatic side income while the shop runs.</div>
          ) : (
            <div className="upgrade-row">
              <span>Unlock Pizza Machine</span>
              <strong>New product</strong>
              <kbd>P</kbd>
              <button onClick={() => gameRef.current?.unlockPizzaMachineAction()}>${ui.pizzaUnlockCost}</button>
            </div>
          )}
        </section>
      )}

      {ui.alert && <section className="toast">{ui.alert}</section>}

      {ui.status === 'gameOver' && (
        <section className="game-over">
          <div>
            <h1>Shop Bankrupt</h1>
            <p>Cash dropped to -$50. Press R to restart the business.</p>
            <button onClick={() => gameRef.current?.restart()}>Restart</button>
          </div>
        </section>
      )}
    </main>
  );
}

function UpgradeRow({
  label,
  level,
  cost,
  keyName,
  onClick,
}: {
  label: string;
  level: number;
  cost: number;
  keyName: string;
  onClick: () => void;
}) {
  return (
    <div className="upgrade-row">
      <span>{label}</span>
      <strong>Lv {level}</strong>
      <kbd>{keyName}</kbd>
      <button onClick={onClick}>${cost}</button>
    </div>
  );
}

export default App;
