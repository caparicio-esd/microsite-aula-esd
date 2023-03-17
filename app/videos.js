import "./../assets/styles/style.sass";
function playPauseVideo(event) {
    const video = event.currentTarget.querySelector('video');
    const button = event.currentTarget.querySelector('img');
    if (video.paused) {
      video.play();
      button.classList.add('hidden_mod');
      button.classList.remove('visible_mod');
    } else {
      video.pause();
      button.classList.remove('hidden_mod');
      button.classList.add('visible_mod');
    }
  }
  
  const aportado = document.querySelector('.aportado');
  aportado.addEventListener('click', playPauseVideo);
  //
  const aprender = document.querySelector('.aprender');
  aprender.addEventListener('click', playPauseVideo);
  //
  const futuro = document.querySelector('.futuro');
  futuro.addEventListener('click', playPauseVideo);
  //
  const parati = document.querySelector('.parati');
  parati.addEventListener('click', playPauseVideo);
  //
  const pena = document.querySelector('.pena');
  pena.addEventListener('click', playPauseVideo);
  //

  function playPauseMobile(event) {
    const video = event.currentTarget.querySelector('video');
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }

  const aportado_mov = document.querySelector('.aportado_mov');
  aportado_mov.addEventListener('click', playPauseMobile);
  //
  const aprender_mov = document.querySelector('.aprender_mov');
  aprender_mov.addEventListener('click', playPauseMobile);
  //
  const futuro_mov = document.querySelector('.futuro_mov');
  futuro_mov.addEventListener('click', playPauseMobile);
  //
  const parati_mov = document.querySelector('.parati_mov');
  parati_mov.addEventListener('click', playPauseMobile);
  //
  const pena_mov = document.querySelector('.pena_mov');
  pena_mov.addEventListener('click', playPauseMobile);
  //