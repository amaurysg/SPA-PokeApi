import Character from "../pages/Character"





function animation3D(){

//Movement Animation to happen
const container = document.querySelector(".Characters-inner-container");
const card = document.querySelector(".Characters-inner-card");
//Items
const tittle = document.querySelector(".tittle");
const img = document.querySelector("img");

const description = document.querySelector(".Characters-card_details");
const sizes = document.querySelector(".Characters-card_details h3");

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  //Popout
  tittle.style.transform = "translateZ(150px)";
  img.style.transform = "translateZ(200px) rotateZ(-30deg)";
  description.style.transform = "translateZ(125px)";
  sizes.style.transform = "translateZ(100px)";
  
});
//Animate Out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  tittle.style.transform = "translateZ(0px)";
  img.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
 
});

 
}

export default animation3D