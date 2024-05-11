const body = document.querySelector("#body-parts");
const button = document.querySelector("#day-night");
const imgEffect=document.querySelectorAll("#social-site li")
const coloreffect=document.querySelector("#day-night")
const footersection=document.querySelector("#about-section p");
button.innerHTML="☀️";
let light =button.style.backgroundColor="white";



button.addEventListener("click", function() {
 
  if(light == 'white'){
  body.style.backgroundColor = 'black'; 
  body.style.color='white';
  const svg=document.querySelector(".custom-shape-divider-bottom-1712813924 .shape-fill");
  svg.style.fill='black';
  button.innerHTML="🌑";

  light=button.style.backgroundColor="black";
 
  imgEffect.forEach(function(images){
    images.style.backgroundColor='white';
    images.style.borderRadius="50%";
  })
  footersection.style.color='white';

  }else{

  footersection.style.color='black';
  body.style.backgroundColor = 'white'; 
  const svg=document.querySelector(".custom-shape-divider-bottom-1712813924 .shape-fill");
  svg.style.fill='white';
  button.innerHTML="☀️";
  light=button.style.backgroundColor="white";

  }
});

