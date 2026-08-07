// Telegram Mini App
const tg = window.Telegram?.WebApp;
if (tg) {
    tg.ready();
    tg.expand();
}

// Search Tools
const search = document.getElementById("search");

if (search) {
    search.addEventListener("keyup", function () {
        const value = this.value.toLowerCase();

        document.querySelectorAll(".tool-card").forEach(card => {
            const text = card.innerText.toLowerCase();

            card.style.display = text.includes(value)
                ? "block"
                : "none";
        });
    });
}

// Open Tool
document.querySelectorAll(".tool-card button").forEach(btn => {

    btn.addEventListener("click", () => {

        const title = btn.parentElement.querySelector("h3").innerText;

        alert(title + "\n\nComing Soon 🚀");

    });

});
