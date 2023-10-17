const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
const shootingSound = new Howl({ src: ['shooting.mp3'] });
const explosionSound = new Howl({ src: ['explosion.mp3'] });

const ship = { x: canvas.width / 2, y: canvas.height - 30, width: 30, height: 30, speed: 5 };
const bullets = [];
const enemies = [];
let rightPressed = false;
let leftPressed = false;

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

function moveShip() {
  if (rightPressed && ship.x < canvas.width - ship.width) {
    ship.x += ship.speed;
  } else if (leftPressed && ship.x > 0) {
    ship.x -= ship.speed;
  }
}

function moveBullets() {
  for (let i = 0; i < bullets.length; i++) {
    bullets[i].y -= 5;
    drawBullet(bullets[i]);
    if (bullets[i].y < 0) {
      bullets.splice(i, 1);
      i--;
    }
  }
}

function moveEnemies() {
  for (let i = 0; i < enemies.length; i++) {
    enemies[i].y += 2;
    drawEnemy(enemies[i]);
    if (
      enemies[i].x < ship.x + ship.width &&
      enemies[i].x + 20 > ship.x &&
      enemies[i].y < ship.y + ship.height &&
      enemies[i].y + 20 > ship.y
    ) {
      explosionSound.play();
      alert("Game Over!");
      document.location.reload();
    }
    if (enemies[i].y > canvas.height) {
      enemies.splice(i, 1);
      i--;
    }
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawShip();
  moveShip();
  moveBullets();
  moveEnemies();
  requestAnimationFrame(draw);
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    rightPressed = true;
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    leftPressed = true;
  } else if (e.key === 'Space') {
    bullets.push({ x: ship.x + ship.width / 2, y: ship.y });
    shootingSound.play();
  }
});

document.addEventListener('keyup', (e) => {
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    rightPressed = false;
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    leftPressed = false;
  }
});

document.getElementById('play-button').addEventListener('click', () => {
  setInterval(() => {
    enemies.push({ x: Math.random() * (canvas.width - 20), y: 0 });
  }, 1000);
  draw();
});
