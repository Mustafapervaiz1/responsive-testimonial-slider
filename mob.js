const slider = document.querySelectorAll('.slide')
let slideIndex = 0;

function showSlide(n){
    
    for (i = 0; i < slider.length; i++) {
        slider[i].style.display = "none";  
    }
    
    slider[n].style.display ="block"
}

function nextSlide(n){
    showSlide(slideIndex + n)
}

function prevSlide(n){

}


showSlide(slideIndex)
// console.log(slider);

// slider.forEach((slide,index)=>
// {
//     slide.style.left=`${index * 100}%`
// })