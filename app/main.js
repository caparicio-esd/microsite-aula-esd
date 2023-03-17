import "./../assets/styles/style.sass";
import { accordionEvent } from "./faq";
import { responsiveTitle } from "./header";


export const breakpoint = 770


window.addEventListener('load', (ev) => {
    btnUp() // scroll y responsive hechos
    accordionEvent()
    responsiveTitle()
})

/**
 * Volver arriba y responsive
 */
const btnUp = () => {
    const upBtn = document.getElementById('up')
    const btnText = upBtn.lastElementChild

    // Refactorized
    const responsiveBtnLarge = () => {
        btnText.classList.remove('hidden');
        upBtn.style.paddingLeft = '';
        upBtn.style.paddingRight = '';
    }
    const responsiveBtnSmall = () => {
        btnText.classList.add('hidden');
        upBtn.style.paddingLeft = '16px';
        upBtn.style.paddingRight = '16px';
    }

    window.addEventListener('resize', (ev) => {
        if (window.innerWidth <= breakpoint) {
            responsiveBtnSmall();
        } else {
            responsiveBtnLarge();
        }
    })

    if (window.innerWidth <= breakpoint) {
        responsiveBtnSmall();
    } else {
        responsiveBtnLarge();
    }
}



// pop-up

// const myButton = document.getElementById('my-button');
// const myOverlay = document.getElementById('');
// const closeButton = myOverlay.querySelector('.popup a');

// myButton.addEventListener('click', () => {
//   myOverlay.classList.remove('hidden');
// });

// closeButton.addEventListener('click', () => {
//   myOverlay.classList.add('hidden');
// });