import { breakpoint } from "./main"

export const responsiveTitle = () => {
    const title = document.querySelector('.logo_text')
    window.addEventListener('resize', (ev) => {
        if (window.innerWidth <= breakpoint) {
            title.innerHTML = `<h3>e/s/d Madrid</h3>`
        } else {
            title.innerHTML = `<h3>Escuela Superior de Diseño Madrid</h3>`
        }
    })
}
