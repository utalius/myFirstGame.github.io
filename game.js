const ship = { x: canvas.width / 2, y: canvas.height - 30, width: 30, height: 30, speed: 5 };
const bullets = [];
const enemies = [];
let rightPressed = false;
let leftPressed = false;
let gameRunning = false; // Yeni eklenen değişken

function drawShip() {
  // ... (kod devam ediyor, değişmemiş)
}

function drawBullet(bullet) {
  // ... (kod devam ediyor, değişmemiş)
}

function drawEnemy(enemy) {
  // ... (kod devam ediyor, değişmemiş)
}

function moveShip() {
  // ... (kod devam ediyor, değişmemiş)
}

function moveBullets() {
  // ... (kod devam ediyor, değişmemiş)
}

function moveEnemies() {
  // ... (kod devam ediyor, değişmemiş)
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
  // ... (kod devam ediyor, değişmemiş)
});

document.addEventListener('keyup', (e) => {
  // ... (kod devam ediyor, değişmemiş)
});

document.getElementById('play-button').addEventListener('click', () => {
  if (!gameRunning) {
    gameRunning = true;
    setInterval(() => {
      enemies.push({ x: Math.random() * (canvas.width - 20), y: 0 });
    }, 1000);
    draw();
    shootingSound.play(); // Ses çalma işlemi burada başlatılıyor
  }
});
