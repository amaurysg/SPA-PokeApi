import getHash from "../utils/getHash"
import getPokemon from "../utils/getPokemon"

const Character = async () => {
  const id = getHash()
  const pokemon = await getPokemon(id)
 

  const view = `
    <div class="Characters-inner">
      <article class="Characters-card">
        <img src="${pokemon.sprites.front_default}" alt="name">
        <h2>${pokemon.name}</h2>
      </article>
      <article class="Characters-card">
        <h3>Number: ${pokemon.id}</h3>
        <h3>Type: ${pokemon.types[0].type.name}</h3>
        <h3>Moves: ${pokemon.moves[1].move.name}</h3>
        <h3>Ability: ${pokemon.abilities[1].ability.name}</h3>
     
      </article>
    </div>
  `;
  return view;
};

export default Character;