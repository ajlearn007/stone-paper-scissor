document.addEventListener("DOMContentLoaded", () => {
  let score = getScore();
  updateScores(score.user, score.computer);

  function renderPickedChoice(containerId, choice) {
    const container = document.getElementById(containerId);

    container.innerHTML = `
      <div class="picked-ring ${choice}">
        <img src="./assets/images/${choice}.png" alt="${choice}" />
      </div>
    `;
  }

  document.querySelectorAll(".choice").forEach((btn) => {
    btn.addEventListener("click", () => {
      const userChoice = btn.dataset.choice;
      const pcChoice = getComputerChoice();
      const result = getResult(userChoice, pcChoice);

      renderPickedChoice("user-choice", userChoice);
      renderPickedChoice("pc-choice", pcChoice);

      if (result === "win") score.user++;
      if (result === "lose") score.computer++;

      setScore(score);
      updateScores(score.user, score.computer);
      updateResultText(result);
      showScreen("result-screen");

      if (result === "win") {
        setTimeout(() => showScreen("hurray-screen"), 500);
      }
    });
  });

  document.getElementById("play-again-btn").onclick = () => {
    showScreen("game-screen");
  };

  document.getElementById("hurray-play-again").onclick = () => {
    showScreen("game-screen");
  };

  //  RULES MODAL OPEN
  document.getElementById("rules-btn").onclick = () => {
    document.getElementById("rules-modal").classList.remove("hidden");
  };

  //  RULES MODAL CLOSE (X)
  document.getElementById("close-rules").onclick = (e) => {
    e.stopPropagation();
    document.getElementById("rules-modal").classList.add("hidden");
  };

  //  CLOSE WHEN CLICK OUTSIDE THE BOX
  document.getElementById("rules-modal").addEventListener("click", (e) => {
    if (e.target.id === "rules-modal") {
      document.getElementById("rules-modal").classList.add("hidden");
    }
  });

  //  ESC KEY CLOSE
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.getElementById("rules-modal").classList.add("hidden");
    }
  });
});
