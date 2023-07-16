const root = document.querySelector("#root")

const switchBtn = document.querySelector("#switch")
switchBtn.onclick = () => {
    root.classList.toggle("visitor")
}

const tabs = root.querySelectorAll(".posts .header__item")
tabs.forEach((element, index) => {
    element.onclick = (e) => {
        tabs.forEach((tab, i) => {
            tab.classList.remove("header__item--selected")
        })
        element.classList.add("header__item--selected")
    }
});

const showCommentBtn = root.querySelectorAll(".post .react__comment")
showCommentBtn.forEach((element) => {
    element.onclick = () => {
        const post = element.closest(".post")
        const comments = post.querySelector(".comments")
        comments.classList.toggle("comments--hide")
    }
})

const navs = root.querySelectorAll("#nav .menu__item")
navs.forEach((element, index) => {
    element.onclick = () => {
        navs.forEach((e) => {
            e.classList.remove("menu__item--select")
        })
        element.classList.add("menu__item--select")
    }
})