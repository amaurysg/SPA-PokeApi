//Importamos templates y pages que generamos
import Header from '../templates/Header'
import Home from  '../pages/Home'
import Character from  '../pages/Character'
import Error404 from  '../pages/Error404'
import About from '../pages/About'
import getHash from '../utils/getHash'
import resolveRoutes from '../utils/resolveRoutes'
import animation3D from '../utils/animation3D'

//Ahora creamos las rutas, es un objeto que tiene las rutas y hará render en cada una de ellas 

const routes = {
  "/": Home,
  "/:id": Character,
  "/About": About,
  "/Contact": "Contact",
};

const router = async () => {
  // stablishing templates to dom
  const header = null || document.getElementById("header");
  const content = null || document.getElementById("content");
  
  header.innerHTML = await Header();
  let hash = getHash();
  let route = await resolveRoutes(hash);
  
  let render = routes[route] ? routes[route] : About;
  content.innerHTML = await render();

return route

};

export default router;