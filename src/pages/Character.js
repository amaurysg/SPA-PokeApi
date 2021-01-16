import getHash from "../utils/getHash"
import getPokemon from "../utils/getPokemon"
import animation3D from "../utils/animation3D"




const Character = async () => {

  const id = getHash()
  const pokemon = await getPokemon(id)
  
  const myFunction = (e)=>{

   
   
  }

  const view = `
  
  <div class="Characters-inner-container" onclick="${myFunction}"  >
  <div class="Characters-inner-card">
  <article class="Characters-card_img">
  <div class="circle"></div>
  <img src="${pokemon.sprites.other.dream_world.front_default}"  alt="name">
  </article>
  <article class="Characters-card_details">
  <h2>${pokemon.name}</h2>
  <h3>Number: ${pokemon.id}</h3>
  <h3>Type: ${pokemon.types[0].type.name}</h3>
  <h3>Moves: ${pokemon.moves[1].move.name}</h3>
  <h3>Ability: ${pokemon.abilities[1].ability.name}</h3>
  
  </article>
  </div>
  </div>
  
  
  `;
  
  return view;
};

export default Character;