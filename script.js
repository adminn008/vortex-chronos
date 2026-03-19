function update() {
    const d = new Date();
    document.getElementById('digital-time').innerText = d.toLocaleTimeString('pt-BR');
    document.getElementById('full-date').innerText = d.toLocaleDateString('pt-BR', { 
        weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' 
    }).toUpperCase();
}
setInterval(update, 1000);
update();

// Troca de fundo automática (Sem Direitos Autorais)
const themes = {
    gaming: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1920',
    cyber: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1920',
    nature: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=1920',
    minimal: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&q=80&w=1920'
};

function changeBg(key) {
    document.getElementById('dynamic-bg').style.backgroundImage = `url('${themes[key]}')`;
}
changeBg('cyber'); // Fundo inicial

// Lógica de Tela Cheia com clique em qualquer lugar
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

// Cronômetro Simples
let sw = 0, timer;
function startSW() {
    const btn = document.getElementById('btn-sw');
    if (btn.innerText === "START") {
        btn.innerText = "STOP";
        timer = setInterval(() => {
            sw++;
            let m = Math.floor(sw/60).toString().padStart(2, '0');
            let s = (sw%60).toString().padStart(2, '0');
            document.getElementById('sw-display').innerText = `${m}:${s}`;
        }, 1000);
    } else {
        btn.innerText = "START";
        clearInterval(timer);
    }
}
function resetSW() {
    clearInterval(timer);
    sw = 0;
    document.getElementById('sw-display').innerText = "00:00";
    document.getElementById('btn-sw').innerText = "START";
}
