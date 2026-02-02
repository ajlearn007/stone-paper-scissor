function showScreen(id) {
  document
    .querySelectorAll(".screen")
    .forEach((s) => s.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

function updateScores(user, computer) {
  document.getElementById("user-score").innerText = user;
  document.getElementById("computer-score").innerText = computer;
}

function updateResultText(result) {
  const msg = document.getElementById("result-message");
  const sub = document.getElementById("result-subtext");

  if (result === "win") {
    msg.innerText = "YOU WIN";
    sub.innerText = "AGAINST PC";
  } else if (result === "lose") {
    msg.innerText = "YOU LOST";
    sub.innerText = "AGAINST PC";
  } else {
    msg.innerText = "TIE UP";
    sub.innerText = "";
  }
}
