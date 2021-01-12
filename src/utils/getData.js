const API = "https://pokeapi.co/api/v2/pokemon/";

const getData = async (id) => {
  const apiURL = id ? `${API}${id}` : API;
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log("data",data)
    return data;
  } catch (error) {
    console.log("Error 😮", error);
  }
};

export default getData;

/* const API = `https://pokeapi.co/api/v2/pokemon/`;

const getData = async (id) => {

 for(id = 1; id <=3; id++){

   const response = await fetch(`${API}${id}`)
   const data = response.json()
   return data
 }


};


export default getData; */




