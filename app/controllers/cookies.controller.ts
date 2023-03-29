const cookiesClose = document.querySelector<HTMLDivElement>(".cookies_close")
const cookies = document.querySelector<HTMLDivElement>(".cookies")
export const cookiesController = () => {
    const showCookieLocal = localStorage.getItem("esdmadrid-estudia-cookie")
    const showCookie = showCookieLocal == null ? true : false
    cookiesClose!.addEventListener("click", () => {
        localStorage.setItem("esdmadrid-estudia-cookie", "true")
        cookies?.classList.add("cookies_hidden")
    }) 
    if (showCookie) {
        cookies?.classList.remove("cookies_hidden")
    }
}