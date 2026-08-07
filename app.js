// Telegram Mini App
const tg = window.Telegram?.WebApp;

if (tg) {
    tg.ready();
    tg.expand();
}

// BMI Calculator
function calculateBMI() {

    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);

    if (!height || !weight) {
        alert("Please enter height and weight.");
        return;
    }

    const bmi = weight / ((height / 100) * (height / 100));

    document.getElementById("bmiResult").innerHTML =
        "BMI: " + bmi.toFixed(1);

    let status = "";

    if (bmi < 18.5)
        status = "🔵 Underweight";

    else if (bmi < 25)
        status = "🟢 Normal Weight";

    else if (bmi < 30)
        status = "🟠 Overweight";

    else
        status = "🔴 Obese";

    document.getElementById("bmiStatus").innerHTML = status;
}

// Search
const search = document.getElementById("search");

if (search) {

    search.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        document.querySelectorAll(".tool-card").forEach(card => {

            const text = card.innerText.toLowerCase();

            card.style.display =
                text.includes(value)
                    ? "block"
                    : "none";
        });

    });

}
