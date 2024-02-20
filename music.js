let progress = document.getElementById("progress");
let song = document.getElementById("song");
let icon = document.getElementById("ctrlIcon");



song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
}
function playPause() {
    if (icon.classList.contains("ri-pause-fill")) {
        song.pause();
        icon.classList.remove('ri-pause-fill');
        icon.classList.add("ri-play-fill")
    }
    else {
        song.play();
        icon.classList.remove('ri-play-fill');
        icon.classList.add("ri-pause-fill")

    }
}
if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;

    },500)
}
progress.onchange =()=>{
    song.play();
    song.currentTime= progress.value;
    
}