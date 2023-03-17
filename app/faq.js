/**
 * Hace que se abra y se cierre el acordeón al clickar en cualquier parte de cada uno
 * Cambiado a que se cierre sólo cuando clickas el header del acordeón
 */
export const accordionEvent = () => {
    const accordions = document.querySelectorAll('.accordion_item')

    for (const accordion of accordions) {
        const accordionHeader = accordion.firstElementChild
        
        accordionHeader.addEventListener('click', (ev) => {
            if (accordion.classList.contains('closed')) {
                accordion.classList.add('opened');
                accordion.classList.remove('closed');
            } else {
                accordion.classList.add('closed');
                accordion.classList.remove('opened');
            }
        })
    }
}