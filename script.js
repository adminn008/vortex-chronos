// 1. LOCALIZAÇÃO (CIDADE)
async function getCityByIP() {
    const elementoLocal = document.getElementById('vortex-location');
    try {
        // Usando a ipwho.is que é mais rápida e estável
        const response = await fetch('https://ipwho.is/');
        const data = await response.json();
        
        // Ajustado para ler corretamente o formato da ipwho.is
        if (data && data.success && data.city) {
            elementoLocal.textContent = `Horário de ${data.city}`;
        } else {
            elementoLocal.textContent = "Horário Local";
        }
    } catch (e) {
        console.error("Erro na localização:", e);
        elementoLocal.textContent = "Horário Local";
    }
}

// 2. RELÓGIO E DATA
let ultimaData = "";

function updateVortex() {
    const agora = new Date();
    
    // Relógio
    const h = String(agora.getHours()).padStart(2, '0');
    const m = String(agora.getMinutes()).padStart(2, '0');
    const s = String(agora.getSeconds()).padStart(2, '0');
    
    const clockEl = document.getElementById('vortex-clock');
    if (clockEl) clockEl.textContent = `${h}:${m}:${s}`;

    // Datas
    const opcoes = { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' };
    const dataFormatada = agora.toLocaleDateString('pt-BR', opcoes);
    const dataFinal = dataFormatada.charAt(0).toUpperCase() + dataFormatada.slice(1);

    if (dataFinal !== ultimaData) {
        const elementoTopo = document.getElementById('vortex-date');
        const elementoRodape = document.getElementById('footer-full-date');

        if (elementoTopo) {
            elementoTopo.textContent = dataFinal;
            elementoTopo.classList.add('fade-effect');
            setTimeout(() => elementoTopo.classList.remove('fade-effect'), 1000);
        }
        
        if (elementoRodape) {
            elementoRodape.textContent = dataFinal;
        }

        ultimaData = dataFinal;
    }
}

// 3. FUNÇÕES DE UTILIDADE (PIX E TELA CHEIA)
function copyPix(chave) {
    const txt = document.getElementById('pix-text');
    navigator.clipboard.writeText(chave).then(() => {
        txt.textContent = "CHAVE COPIADA!";
        setTimeout(() => { txt.textContent = "CONTRIBUIR VIA PIX"; }, 2000);
    });
}

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.warn(`Erro ao ativar tela cheia: ${err.message}`);
        });
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        console.log("Saiu da tela cheia");
    }
});

// 4. MANTER TELA ATIVA (WAKE LOCK)
let wakeLock = null;

async function requestWakeLock() {
    try {
        if ('wakeLock' in navigator) {
            wakeLock = await navigator.wakeLock.request('screen');
            const btn = document.getElementById('wake-lock-btn');
            if (btn) {
                btn.style.color = "#00ff41";
                btn.style.borderColor = "#00ff41";
                btn.innerText = "TELA: SEMPRE ATIVA";
            }
        }
    } catch (err) {
        console.error(`Erro Wake Lock: ${err.message}`);
    }
}

// 5. ATALHOS DE TECLADO
document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    if (key === 'f') toggleFullScreen();
    if (key === 'm') window.location.href = 'global.html';
    if (key === 'c') window.location.href = 'cronometro.html';
    if (event.code === 'Space') event.preventDefault();
});

// 6. INICIALIZAÇÃO
getCityByIP();
setInterval(updateVortex, 1000);
updateVortex();
