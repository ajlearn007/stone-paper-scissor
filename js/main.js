document.addEventListener("DOMContentLoaded", () => {
  // ===== SCORE INIT =====
  let score = getScore();
  updateScores(score.user, score.computer);

  // ===== RENDER PICK =====
  function renderPickedChoice(containerId, choice) {
    const container = document.getElementById(containerId);

    container.innerHTML = `
      <div class="picked-ring ${choice}">
        <img src="./assets/images/${choice}.png" alt="${choice}" />
      </div>
    `;
  }

  // ===== GAME BUTTONS =====
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

  // ===== PLAY AGAIN =====
  document
    .getElementById("play-again-btn")
    .addEventListener("click", () => showScreen("game-screen"));

  document
    .getElementById("hurray-play-again")
    .addEventListener("click", () => showScreen("game-screen"));

  // ================================
  // ===== RULES MODAL (FINAL) ======
  // ================================

  const modal = document.getElementById("rules-modal");
  const openRulesBtn = document.getElementById("rules-btn");
  const closeRulesBtn = document.getElementById("close-rules");

  // OPEN
  openRulesBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });

  // CLOSE (X)
  closeRulesBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    modal.classList.add("hidden");
  });

  // CLICK OUTSIDE CLOSE
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });

  // ESC KEY CLOSE
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modal.classList.add("hidden");
    }
  });
});
