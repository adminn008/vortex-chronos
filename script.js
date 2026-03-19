// Atualiza a data automaticamente
const dateDisplay = document.getElementById('currentDate');
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
dateDisplay.innerText = new Date().toLocaleDateString('pt-BR', options);

// Lógica da Calculadora Profissional
function calcular() {
    const valorServico = document.getElementById('servico').value;
    const quantidade = document.getElementById('qtd').value;
    const total = valorServico * quantidade;
    
    document.getElementById('total').innerText = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(total);
}

// Simulação de carregamento de dados
window.onload = () => {
    const projCount = document.getElementById('projCount');
    // Animação de contagem
    let count = 0;
    const interval = setInterval(() => {
        if(count >= 12) clearInterval(interval);
        projCount.innerText = count;
        count++;
    }, 50);
};
