let cursorDot = document.querySelector("#cursorDot");
let cursorOutline = document.querySelector("#cursorOutline");


window.addEventListener("mousemove",function(e) {
    let posX= e.clientX;
    let posY= e.clientY;
    console.log(posX,posY);
    cursorDot.style.left=posX+"px";
    cursorDot.style.top=posY+"px";
    // cursorOutline.style.left=posX+"px";
    // cursorOutline.style.top=posY+"px";
    cursorOutline.animate({
     left:`${posX}px`,
     top:`${posY}px`
    },{
        duration: 250,
        easing:"linear",
       
        fill:"forwards",
    })
})