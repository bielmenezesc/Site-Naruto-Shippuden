const currentPage = location.pathname
const menuItens = document.querySelectorAll("header .links a")
const cards = document.querySelectorAll(".card")

for (item of menuItens) {
    if (currentPage.includes(item.getAttribute('href'))) {
        item.classList.add("active")
    }
}

for (let card of cards) {
    card.addEventListener("click", function() {
    const videoID = card.getAttribute("id")
    window.location.href = `video?id=${videoID}`
    })
}