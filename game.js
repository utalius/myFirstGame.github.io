document.getElementById('play-button').addEventListener('click', () => {
    setInterval(() => {
        enemies.push({ x: Math.random() * (canvas.width - 20), y: 0 });
    }, 1000);
    draw();
    
    // Kullanıcı etkileşimiyle ses çalmayı başlat
    shootingSound.play();
});
