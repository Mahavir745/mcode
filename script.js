const body = document.querySelector("#body-parts");
const button = document.querySelector("#day-night");
const imgEffect=document.querySelectorAll("#social-site li")
const coloreffect=document.querySelector("#day-night")
const footersection=document.querySelector("#about-section p");
button.innerHTML="☀️";



button.addEventListener("click", function(e) {

  footersection.style.color='black';
  body.style.backgroundColor = 'white'; 
  const svg=document.querySelector(".custom-shape-divider-bottom-1712813924 .shape-fill");
  svg.style.fill='white';
  button.innerHTML="☀️";
  // coloreffect.style.backgroundColor='white'
  // coloreffect.style.clipPath="circle(50% at 50% 50%)";


});


button.addEventListener("dblclick", function(e) {
  body.style.backgroundColor = 'black'; 
  body.style.color='white';
  const svg=document.querySelector(".custom-shape-divider-bottom-1712813924 .shape-fill");
  svg.style.fill='black';
  button.innerHTML="🌑";
  // coloreffect.style.backgroundColor='black';
  // coloreffect.style.clipPath="polygon(41% 0%, 28% 11%, 18% 22%, 9% 34%, 1% 48%, 1% 62%, 2% 75%, 6% 83%, 18% 94%, 32% 100%, 47% 100%, 66% 100%, 79% 93%, 90% 76%, 78% 75%, 58% 77%, 42% 69%, 32% 58%, 30% 35%, 37% 14%)";

  imgEffect.forEach(function(images){
    images.style.backgroundColor='white';
    images.style.borderRadius="50%";
  })
  footersection.style.color='white';
  
});
