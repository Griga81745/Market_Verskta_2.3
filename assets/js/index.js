var activateBurgerMenu = document.getElementById("burger_menu-active")
activateBurgerMenu.onclick = function () {
    var burgerMenuActivate = document.getElementById("burgerMenu");
    burgerMenuActivate.classList.toggle("burgermenu--active");
}

var sliderImage_1= document.getElementById("sliderImage_1")
sliderImage_1.onclick = function () {
    console.log("Its Work");
    var sliderImageShow1 = document.getElementById("slider_image_show");
    sliderImageShow1.className = "slider-image-show1" ;
}

var sliderImage_2= document.getElementById("sliderImage_2")
sliderImage_2.onclick = function () {
    console.log("Its Work");
    var sliderImageShow2 = document.getElementById("slider_image_show");
    sliderImageShow2.className = "slider-image-show2" ;
}

var sliderImage_3= document.getElementById("sliderImage_3")
sliderImage_3.onclick = function () {
    console.log("Its Work");
    var sliderImageShow3 = document.getElementById("slider_image_show");
    sliderImageShow3.className = "slider-image-show3" ;
}

var sliderImage_3= document.getElementById("sliderImage_3")
sliderImage_3.onclick = function () {
    console.log("Its Work");
    var sliderImageShow3 = document.getElementById("slider_image_show");
    sliderImageShow3.className = "slider-image-show3" ;
}

var sliderImage_4= document.getElementById("sliderImage_4")
sliderImage_4.onclick = function () {
    console.log("Its Work");
    var sliderImageShow4 = document.getElementById("slider_image_show");
    sliderImageShow4.className = "slider-image-show4" ;
}

var sliderImage_5= document.getElementById("sliderImage_5")
sliderImage_5.onclick = function () {
    console.log("Its Work");
    var sliderImageShow5 = document.getElementById("slider_image_show");
    sliderImageShow5.className = "slider-image-show5" ;
}

//Ниже хрень отвечает за Сворачивание характеристики
var characteristic__swipe_button = document.getElementById("characteristic__swipe")
characteristic__swipe_button.onclick = function (){
    var characteristic__swipe_container = document.getElementById("container__characteristic");
    characteristic__swipe_container.classList.toggle("container__characteristic-wrapper--active");
    characteristic__swipe_button.classList.toggle("characteristic__swipe-hidden");
    var swipe_enabled = document.getElementById("characteristic__swipe-enabled");
    swipe_enabled.classList.toggle("characteristic__swipe-hidden");
}

var characteristic__swipe_button_disable = document.getElementById("characteristic__swipe-enabled")
characteristic__swipe_button_disable.onclick = function (){
    var characteristic__swipe_container_2 = document.getElementById("container__characteristic");
    characteristic__swipe_container_2.classList.toggle("container__characteristic-wrapper--active");
    characteristic__swipe_button.classList.toggle("characteristic__swipe-hidden");
    characteristic__swipe_button_disable.classList.toggle("characteristic__swipe-hidden")
}

// Ебать выше такой говнокод я заебался думать как это реализовать в итоге написал говно код | Да и хуй с ним | Не хватает занинй js Нужно доучить его


