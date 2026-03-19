function updateVortex() {
    const agora = new Date();

    // Relógio Principal
    const h = String(agora.getHours()).padStart(2, '0');
    const m = String(agora.getMinutes()).padStart(2, '0');
    const s = String(agora.getSeconds()).padStart(2, '0');
    document.getElementById('vortex-clock').textContent = `${h}:${m}:${s}`;

    // Data formatada para os dois lugares
    const opcoes = { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' };
    const dataFormatada = agora.toLocaleDateString('pt-BR', opcoes);
    const dataCapitalizada = dataFormatada.charAt(0).toUpperCase() + dataFormatada.slice(1);

    document.getElementById('vortex-date').textContent = dataCapitalizada;
    document.getElementById('footer-full-date').textContent = dataCapitalizada;
}

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

setInterval(updateVortex, 1000);
updateVortex();
