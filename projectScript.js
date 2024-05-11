const body = document.querySelector("#body-parts");
const button = document.querySelector("#day-night");
const coloreffect=document.querySelector("#day-night")
button.innerHTML="☀️"

let light=button.style.backgroundColor="white";

button.addEventListener("click", function(e) {
  if(light == 'white'){
    body.style.backgroundColor = 'black'; 
    body.style.backgroundColor = 'black'; 
    body.style.color='white';
    const svg=document.querySelector(".custom-shape-divider-bottom-1712813924 .shape-fill");
    svg.style.fill='black';
    button.innerHTML="🌑";
    light=button.style.backgroundColor="black";
  }
  else{
  body.style.backgroundColor = 'white'; 
  const svg=document.querySelector(".custom-shape-divider-bottom-1712813924 .shape-fill");
  svg.style.fill='white';
  button.innerHTML="☀️";
  light=button.style.backgroundColor="white";

  }


});

