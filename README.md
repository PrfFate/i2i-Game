# Coffee Ready 3D

Coffee Ready 3D is a small tycoon-style Three.js game inspired by production-and-delivery shop games. The player controls a barista inside an isometric coffee business and manages the loop from coffee production to sales.

## Game Loop

1. Go to **COFFEE MACHINE** and pick up fresh coffee.
2. Walk-in customers enter from the front door, walk into the shop, and form a visible queue at **SALES**.
3. For normal customers, carry coffee directly to **SALES**. No packaging is needed.
4. For packaged orders, carry coffee to **PACK** and stand there until the packing bar fills.
5. Leave packaged orders on the **PICKUP** shelf. The courier van automatically collects staged packages when it arrives.
6. Carry multiple coffees/packages as your staff level grows.
7. Earn cash, then use **UPGRADE**, **HR**, and **PIZZA $1000** to grow the business.

## Controls

- `WASD` or arrow keys: move the player
- Drag on the game canvas: slightly rotate/tilt the camera
- `Q` / `E`: rotate the camera left/right
- `C`: reset the camera angle
- `1`: upgrade coffee machine
- `2`: upgrade packing station
- `3`: upgrade staff training
- `H`: hire employee in HR
- `P`: unlock pizza machine in the pizza expansion area
- `R`: restart after game over

## Business Rules

- The coffee machine produces stock automatically.
- The player can carry multiple coffees/packages, with capacity based on staff level.
- Walk-in customers spawn outside, enter through the front door, then smoothly walk into the sales queue.
- Customer demand scales with machine, staff, and shop levels, increasing both queue capacity and arrival speed as the cafe upgrades.
- Walk-in coffee does not need packaging.
- Pickup orders require packaged coffee. Packages wait on the pickup shelf until the courier van collects them automatically.
- Missing impatient customers or couriers costs cash.
- The shop goes bankrupt and game over appears when cash reaches **-$50**.
- Employees hired from HR automate sales routes.
- The pizza machine can be unlocked for **$1000** and generates side income.
- Blue rush customers enter from the door and cross the shop as moving obstacles; bumping into one while carrying an order drops it.

## Requirement Mapping

- **Development setup:** Vite, React, TypeScript, Three.js.
- **Scene infrastructure:** Perspective camera, WebGL renderer, ground/floor planes, walls, shop stations, ambient and directional lighting with shadows.
- **Player controls:** keyboard movement with WASD/arrow keys.
- **Game loop:** coffee production, exterior walk-in customer arrivals, courier arrival, employee automation, moving obstacles.
- **Collision detection:** zone distance checks, moving-customer collision, wall/station/table rectangular colliders.
- **State/UI overlay:** cash-only always-on HUD, contextual HR/upgrade/pizza menus, bankruptcy game over/restart.
