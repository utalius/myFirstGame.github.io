const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

// ... (Diğer kodlar devam ediyor)

function drawShip() {
  ctx.beginPath();
  ctx.rect(ship.x, ship.y, ship.width, ship.height);
  ctx.fillStyle = '#3498db';
  ctx.fill();
  ctx.closePath();
}

function drawBullet(bullet) {
  ctx.beginPath();
  ctx.rect(bullet.x, bullet.y, 5, 10);
  ctx.fillStyle = '#e74c3c';
  ctx.fill();
  ctx.closePath();
}

function drawEnemy(enemy) {
  ctx.beginPath();
  ctx.rect(enemy.x, enemy.y, 20, 20);
  ctx.fillStyle = '#e67e22';
  ctx.fill();
  ctx.closePath();
}

// ... (Diğer kodlar devam ediyor)
