// Telegram Mini App
if (window.Telegram && Telegram.WebApp) {
  Telegram.WebApp.ready();
  Telegram.WebApp.expand();
}

// BMI Calculator
function calculateBMI() {
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const result = document.getElementById("result");

  if (!height || !weight) {
    result.innerHTML = "⚠️ Please enter height and weight.";
    return;
  }

  const bmi = weight / ((height / 100) * (height / 100));

  let status = "";

  if (bmi < 18.5) {
    status = "Underweight";
  } else if (bmi < 25) {
    status = "Healthy";
  } else if (bmi < 30) {
    status = "Overweight";
  } else {
    status = "Obese";
  }

  result.innerHTML = `
    <h2>${bmi.toFixed(1)}</h2>
    <p>${status}</p>
  `;
}
