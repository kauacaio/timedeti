// Função para abrir o vídeo no modal
function abrirVideo(videoId) {
    const modal = document.getElementById('video-modal');
    const videoPlayer = document.getElementById('video-player');

    // Define o vídeo a ser reproduzido
    videoPlayer.src = `assets/${videoId}.mp4`;

    // Exibe o modal e ativa o efeito de aurora boreal
    modal.style.display = 'flex';
    modal.classList.add('active');

    // Inicia a reprodução do vídeo
    videoPlayer.play();
}

// Função para fechar o modal
function fecharVideo() {
    const modal = document.getElementById('video-modal');
    const videoPlayer = document.getElementById('video-player');

    // Pausa o vídeo
    videoPlayer.pause();

    // Oculta o modal e remove o efeito de aurora boreal
    modal.style.display = 'none';
    modal.classList.remove('active');

    // Limpa o vídeo
    videoPlayer.src = '';
}