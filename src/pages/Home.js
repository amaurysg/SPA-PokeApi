
import getPokemon from "../utils/getPokemon"
import getAllPokemon from "../utils/getAllPokemon"



const Home = async () => {

  const arrayPokemon = await getAllPokemon()
  
 const view = `
  <div class="Characters">
  ${arrayPokemon.map( (pokemon) => `
    <article class="Characters-item">
        <a href="#/${pokemon.id} ">
          <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}"/>
          <h2>${pokemon.name} </h2>
        </a>
    </article>`
    )
    .join("")}
  </div>
  ` 
return view
 


};

export default Home;