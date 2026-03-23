  window.addEventListener('click', function() {
    const audio = document.getElementById('tunes');
    audio.play();
    audio.volume = 0.2;
  });

  function switchTheme() {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');

    const theme = document.body.classList.contains('light-theme') ? 'light-theme' : 'dark-theme';
    const tunes = theme === 'light-theme' ? 'normal-world.mpeg' : 'inverted-world.mpeg';   
    const audio = document.getElementById('tunes');
    audio.src = `./src/tunes/${tunes}`;
    audio.play();
    audio.volume = 0.2;
  }
