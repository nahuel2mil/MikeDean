
  let player;

  // Función que carga el reproductor
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      videoId: 'iJjRTL1xcKI', // ID del video de YouTube
      playerVars: {
        autoplay: 1,
        modestbranding: 1,
        rel: 0
      }
    });
  }

  // Detiene el video al cerrar el modal
  const modal = document.getElementById('exampleModal1');
  modal.addEventListener('hidden.bs.modal', function () {
    if (player && player.pauseVideo) {
      player.pauseVideo(); // Pausa el video sin reiniciarlo
    }
  });
