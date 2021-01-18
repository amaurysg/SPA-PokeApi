import getHash from "../utils/getHash"
import getPokemon from "../utils/getPokemon"
import animation3D from "../utils/animation3D"
import router from "../routes/index"




const Character = async () => {

  const id = getHash()
  const pokemon = await getPokemon(id)
  


  const view = `
  
  <div class="Characters-inner-container" "  >
  <div class="Characters-inner-card">
  <article class="Characters-card_img">
  <div class="circle"></div>
  <div class="circle_id"><p>${pokemon.id}</p></div>
  <img  class="img" src="${pokemon.sprites.other.dream_world.front_default}"  alt="name">
  </article>
  <article class="Characters-card_details">
  <h2 class="tittle">${pokemon.name}</h2>
  <div class="tittle-more">
  <h3>Number: ${pokemon.id}</h3>
  <h3>Type: ${pokemon.types[0].type.name}</h3>
  <h3>Exp: ${pokemon.base_experience}</h3>
  <h3>Stats: ${pokemon.stats[0].base_stat}</h3>
  </div>
  </article>
  </div>
  </div>
  
  
  `;
  
console.log(view)
  
  return view;
};

export default Character;