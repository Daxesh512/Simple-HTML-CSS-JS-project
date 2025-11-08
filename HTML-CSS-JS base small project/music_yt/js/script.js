document.getElementById('play-button').addEventListener('click', function(){
    let music = document.getElementById('background-music');

    if (music.paused){
        music.play().catch(function (error){
            alert('Error playing music:', error);
        })
        this.src = 'img/music-on.png';
    } else{
        music.pause();
        this.src = 'img/music-mute.png';
    }
})