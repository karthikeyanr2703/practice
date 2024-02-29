let songs =[
    "1.mp3",
    "2.mp3",
    "3.mp3",
]
let currentSongIndex = 0;
    const audioPlayer = document.getElementById('audioPlayer');
    const playPauseButton = document.getElementById('playPauseButton');
    function playSong() {
        audioPlayer.src = songs[currentSongIndex];
        audioPlayer.play();
       playPauseButton.textContent= "pause";
    }
    function pauseSong() {
        audioPlayer.pause();
       playPauseButton.textContent= "play";
    }
    function togglePlayPause() {
        if (audioPlayer.paused) {
            playSong();
        } else {
            pauseSong();
        }
    }
    audioPlayer.addEventListener('ended', function() {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        playSong();
    });