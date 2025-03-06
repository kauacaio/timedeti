// Função para trocar as frases motivacionais
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showNextSlide() {
    // Oculta a frase atual
    slides[currentSlide].classList.remove('active');
    
    // Avança para a próxima frase
    currentSlide = (currentSlide + 1) % slides.length;
    
    // Exibe a próxima frase
    slides[currentSlide].classList.add('active');
}

// Troca as frases a cada 5 segundos
setInterval(showNextSlide, 5000);

// Exibe a primeira frase ao carregar a página
slides[0].classList.add('active');

// Função para redirecionar ao clicar no botão "Abrir Task"
function abrirTask() {
    window.open('https://forms.clickup.com/9011833817/f/8cjbayt-7791/8LVM6MSRGMTA3SCR8N', '_blank');
}

// Funções para os outros botões
function abrirTutoriais() {
    alert('Abrir Tutoriais...');
}

function falarComAdmin() {
    h;
}

// Função para mover o carrossel
function moverCarrossel(direcao) {
    const carrosselContainer = document.querySelector('.carrossel-container');
    const itens = document.querySelectorAll('.carrossel-item');
    const itemAtivo = document.querySelector('.carrossel-item.active');

    let indexAtivo = Array.from(itens).indexOf(itemAtivo);
    let novoIndex = indexAtivo + direcao;

    // Verifica os limites do carrossel
    if (novoIndex < 0) {
        novoIndex = itens.length - 1;
    } else if (novoIndex >= itens.length) {
        novoIndex = 0;
    }

    // Remove a classe 'active' do item atual
    itemAtivo.classList.remove('active');

    // Adiciona a classe 'active' ao novo item
    itens[novoIndex].classList.add('active');

    // Move o container do carrossel
    carrosselContainer.style.transform = `translateX(-${novoIndex * 100}%)`;
}

// Função para acessar o Manual do Colaborador
function acessarManual() {
    window.location.href = 'Manual/manual.html';
}