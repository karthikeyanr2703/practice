let myAudio = document.getElementById("myAudio");

document.addEventListener('DOMContentLoaded', function() {
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    button1.addEventListener('click', function() {
        // Change the URL to the desired page
        window.location.href = './techEvents.html';
    });
    button2.addEventListener('click', function() {
        // Change the URL to the desired page
        window.location.href = './techEvents.html';
    });

});
function playSound(){
    myAudio.play()
    
}
playSound();