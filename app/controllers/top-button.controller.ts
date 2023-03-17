
const upButton = document.querySelector<HTMLElement>("#up")
const breakPoint = 770

export const topButtonControllerInit = () => {
    const responsiveWindow = window.matchMedia(`(max-width: ${breakPoint}px)`)
    responsiveWindow.addEventListener("change", (ev) => {
        if (responsiveWindow.matches) {
            setButtonToLarge()
        } else {
            setButtonToSmall()
        }
    })
}
const setButtonToLarge = () => {
    upButton?.classList.remove("hidden")
    Object.assign(upButton?.style!, {
        paddingLeft: "16px", 
        paddingRight: "16px"
    } as CSSStyleDeclaration)
}
const setButtonToSmall = () => {
    upButton?.classList.add("hidden")
    Object.assign(upButton?.style!, {
        paddingLeft: "", 
        paddingRight: ""
    } as CSSStyleDeclaration)
    
}