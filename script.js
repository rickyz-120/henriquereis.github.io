const textElement = document.getElementById('typewriter');
const text = "Analista de BI focado em Ciência de Dados.";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        textElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100); // Velocidade da digitação
    }
}

// Inicia o efeito quando a página carrega
window.onload = () => {
    textElement.innerHTML = ""; // Limpa o texto inicial do HTML
    typeWriter();
};