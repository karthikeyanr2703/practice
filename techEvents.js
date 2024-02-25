let myAudio = document.getElementById("myAudio");

document.addEventListener('DOMContentLoaded', function() {
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    button1.addEventListener('click', function() {
        // Change the URL to the desired page
        window.location.href = './event.html';
    });
    button2.addEventListener('click', function() {
        // Change the URL to the desired page
        window.location.href = './event.html';
    });
    button3.addEventListener('click', function() {
        // Change the URL to the desired page
        window.location.href = './event.html';
    });
    button4.addEventListener('click', function() {
        // Change the URL to the desired page
        window.location.href = './event.html';
    });

});
function playSound(){
    myAudio.play()
    
}
playSound();