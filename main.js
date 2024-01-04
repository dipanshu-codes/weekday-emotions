const checkEmotion = document.getElementById("check");
checkEmotion.addEventListener("click", checkEmotionsForDays);

const showText = document.getElementById("show");

function checkEmotionsForDays() {
  const dayInput = document.querySelector("#day").value;
  const day = String(dayInput).toLowerCase();

  if (day === "tuesday" || day === "thrusday") {
    showText.textContent = "Yayy, today is class...";
  } else if (day === "saturday" || day === "sunday") {
    showText.textContent = "Ohhhhh Yeahhhhhh!!! Weekend...";
  } else {
    showText.textContent = "Ahhhhhhh...";
  }
}
