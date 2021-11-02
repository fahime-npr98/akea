let active= 0;
let slides=document.querySelectorAll(".slide")
let next=document.querySelector(".next")
let pre= document.querySelector(".prev")

let switchSlide= () =>{
   slides.forEach(slide => slide.classList.remove("active"));
   slides[active].classList.add("active")
}

let showNext= () => {
   if (active==slides.length-1) {
       active=0;
   }else(
       active++
   )
   switchSlide() 
}


next.addEventListener("click", e => showNext());
pre.addEventListener("click", e =>{
    if (active==0) {
        active= slides.length-1;
    }else(
        active--
    )
    switchSlide() 
});

setInterval( showNext, 4000);