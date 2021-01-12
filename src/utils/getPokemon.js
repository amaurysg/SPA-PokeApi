const getPokemon =  async (id)=>{
  const API = `https://pokeapi.co/api/v2/pokemon/${id}`
  const response = await fetch(API)
  const data = await response.json()
  return data
}


export default getPokemon

