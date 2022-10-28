const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
if (darkThemeMq.matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    document.getElementById('TSW1').checked = true;
    document.getElementById('TSW2').checked = true;
} else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
}

function switchTheme(state) {
    if(state){
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}
function ST1(){
    var TSW1 = document.getElementById('TSW1').checked;
    document.getElementById('TSW2').checked = TSW1;
    switchTheme(TSW1);
}
function ST2(){
    var TSW2 = document.getElementById('TSW2').checked;
    document.getElementById('TSW1').checked = TSW2;
    switchTheme(TSW2);
}

if(window.navigator.language.split("-")[0] == "en"){
    document.documentElement.setAttribute('lang', 'en');
}else{
    document.documentElement.setAttribute('lang', 'th');
    document.getElementById('LSW1').checked = true;
    document.getElementById('LSW2').checked = true;
}
function switchLang(state) {
    if(state){
        document.documentElement.setAttribute('lang', 'th');
    } else {
        document.documentElement.setAttribute('lang', 'en');
    }
}
function SL1(){
    var LSW1 = document.getElementById('LSW1').checked;
    document.getElementById('LSW2').checked = LSW1;
    switchLang(LSW1);
}
function SL2(){
    var LSW2 = document.getElementById('LSW2').checked;
    document.getElementById('LSW1').checked = LSW2;
    switchLang(LSW2);
}

window.onscroll = function() {
    stickScroll()
};

var sticky = navbar.offsetTop;
function stickScroll() {
    var navbar = document.getElementById("navbar");
    var drop = document.getElementById("dc");
    if (window.pageYOffset >= sticky) {
        navbar.classList.remove("n");
        navbar.classList.add("sticky");
        drop.classList.remove("dct");
    } else {
        navbar.classList.remove("sticky");
        navbar.classList.add("n");
        drop.classList.add("dct");
    }
}

function Nav() {
    var menubtns = document.getElementById("menubtns").classList;
    if(document.getElementById("Sidenav").style.width == 0 || document.getElementById("Sidenav").style.width == "0px") { 
        document.getElementById("Sidenav").style.width = "100%";
        document.getElementById("main").style.display = "none";
        menubtns.add("active");
        menubtns.remove("not-active");
    }else{
        document.getElementById("Sidenav").style.width = "0";
        document.getElementById("main").style.display = "block";
        menubtns.add("not-active");
        menubtns.remove("active");
    }
}

let slideIndex1 = 1;
let slideIndex2 = 1;
showSlides(slideIndex1, '1');
showSlides(slideIndex2, '2');

function plusSlides(n, SID) {
    if(SID == '1'){
        showSlides(slideIndex1 += n, SID);
    }else if(SID == '2'){
        showSlides(slideIndex2 += n, SID);
    }
}

function currentSlide(n, SID) {
    if(SID == '1'){
        showSlides(slideIndex1 = n, SID);
    }else if(SID == '2'){
        showSlides(slideIndex2 = n, SID);
    }
}

function showSlides(n, SID) {
    let i;
    let ss = "s"+SID;
    let dd = "d"+SID;
    let slides = document.getElementsByClassName(ss);
    let dots = document.getElementsByClassName(dd);
    if(SID == '1'){
        if (n > slides.length){
        slideIndex1 = 1;
        }
        if (n < 1){
            slideIndex1 = slides.length;
        }
        for (i = 0; i < slides.length; i++){
            slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++){
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex1-1].style.display = "block";  
        dots[slideIndex1-1].className += " active";
    }else if(SID == '2'){
        if (n > slides.length){
        slideIndex2 = 1;
        }
        if (n < 1){
            slideIndex2 = slides.length;
        }
        for (i = 0; i < slides.length; i++){
            slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++){
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex2-1].style.display = "block";  
        dots[slideIndex2-1].className += " active";
    }
}