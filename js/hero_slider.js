//the slider
var counter = 0;
var pagination = document.querySelectorAll("#hero_slider .slide_pagination .pagination li");
var productInfo = document.querySelectorAll("#hero_slider .products_info");
var productImg = document.querySelectorAll("#hero_slider .products_img");
document.querySelector("#hero_slider .slide_pagination .next").addEventListener("click", ()=>{
    if(counter == pagination.length -1 ){
        counter = 0;
    } else{
        counter++;
    }
    sliderProducts(counter);
})

document.querySelector("#hero_slider .slide_pagination .prev").addEventListener("click", ()=>{
    if(counter == 0){
        counter = pagination.length - 1;
    } else{
        counter--;
    }
    sliderProducts(counter);
})

function sliderProducts(count){
    document.querySelector("#hero_slider .slide_pagination .pagination li.active").classList.remove("active");
    pagination[count].classList.add("active");

    //change product info
    document.querySelector("#hero_slider .products_info.show").classList.remove("show");
    productInfo[count].classList.add("show");
    //change product img
    document.querySelector("#hero_slider .products_img.show").classList.remove("show");
    productImg[count].classList.add("show");
}