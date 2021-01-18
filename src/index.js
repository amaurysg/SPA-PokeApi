//importamos routers
import router from './routes'
import animation3D from "./utils/animation3D"

const onLoad = async () => {
    const route = await router()

    if(route === '/:id'){
        await animation3D()     
    }
}

window.addEventListener("load", onLoad)
window.addEventListener("hashchange", onLoad)