import getPokemon from "./getPokemon"

const getAllPokemon = async ()=>{
const allPokemon = []
const limitPokemon = 25
for (let i = 1; i <= limitPokemon; i++){
  const pokemon =  await getPokemon(i)

  allPokemon.push(pokemon)
}

return allPokemon


}
export default getAllPokemon