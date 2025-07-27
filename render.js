import { index } from "./index.js"
function render(...component){
    const root = document.getElementById('app')
    root.innerHTML = ''
    component.forEach(component => {
        root.appendChild(component)
    })
}

function navigate(path){
    history.pushState({}, '', path)
    route(path)
}


function route(path){
    if(path === '/'){
        render(index(navigate))
    }
}

route(location.pathname)

window.addEventListener('popstate', () => {
    route(location.pathname)
})