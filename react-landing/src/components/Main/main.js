export default function handleNavResponsive() {
    const root = document.querySelector("#root")

    const toggleBtn = document.querySelector("#header .icon")
    const nav = root.querySelector("#nav")
    const toggleInput = document.querySelector("#toggle-nav")
    const modalBG = document.querySelector(".modal-background")

    toggleBtn.onclick = () => {
        console.log(toggleInput.checked);
        toggleInput.checked = !toggleInput.checked
    }

    toggleInput.onchange = () => {
        nav.classList.remove("hide")
        modalBG.classList.remove("hide")
    }

    modalBG.onclick = () => {
        nav.classList.add("hide")
        modalBG.classList.add("hide")
    }
}



