let myButton = document.getElementById("myButton");
let anotherButton = document.getElementById("anotherButton");
myButton.addEventListener("click", function(){
    let a = document.createElement("a")
    a.href = "./jemh108.pdf"
    a.download = "final.pdf"
    a.click();
})
anotherButton.addEventListener("click", function(){
    let url = "https://www.youtube.com/"
    window.open(url,"_blank")
})