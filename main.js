var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);  
    document.getElementById("pageNum").innerHTML = "Page " + String(slideIndex-1);
    if(slideIndex == 1){
        document.getElementById("pageNum").innerHTML = "";
    }
    document.getElementById("n").style.display = "none";
    if(slideIndex >= 3){
        document.getElementById("p").style.display = "block";
    }
    else{
        document.getElementById("p").style.display = "none";
    }
    check = 0;
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "flex";
}

function toggle(id){
    var text = document.getElementById(id).style.display;
    if(text == "block"){
        document.getElementById(id).style.display = "none";
    }
    else{
        document.getElementById(id).style.display = "block";
    }
}

function show(id){
    document.getElementById(id).style.display = "block";
}

function hide(id){
    document.getElementById(id).style.display = "none";
}

function showNext(){
    document.getElementById("n").style.display = "block";
}           