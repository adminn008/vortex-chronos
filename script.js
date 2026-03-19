// Atualização do Relógio
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    document.getElementById('time').innerText = `${hours}:${minutes}:${seconds}`;
    document.getElementById('ampm').innerText = now.getHours() >= 12 ? 'PM' : 'AM';

    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    document.getElementById('date').innerText = now.toLocaleDateString('pt-BR', options).toUpperCase();
}

setInterval(updateClock, 1000);
updateClock();

// Lógica do Cronômetro
let swInterval;
let swSeconds = 0;
let running = false;

function startStopwatch() {
    const btn = document.getElementById('sw-btn');
    if (!running) {
        running = true;
        btn.innerText = "PAUSAR";
        swInterval = setInterval(() => {
            swSeconds++;
            const m = String(Math.floor(swSeconds / 60)).padStart(2, '0');
            const s = String(swSeconds % 60).padStart(2, '0');
            document.getElementById('stopwatch').innerText = `${m}:${s}`;
        }, 1000);
    } else {
        running = false;
        btn.innerText = "RETOMAR";
        clearInterval(swInterval);
    }
}

function resetStopwatch() {
    clearInterval(swInterval);
    running = false;
    swSeconds = 0;
    document.getElementById('stopwatch').innerText = "00:00";
    document.getElementById('sw-btn').innerText = "INICIAR";
}

// Modo Tela Cheia
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}
