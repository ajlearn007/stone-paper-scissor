function getComputerChoice() {
  const index = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[index];
}

function getResult(userChoice, pcChoice) {
  if (userChoice === pcChoice) return "draw";
  if (RULES[userChoice] === pcChoice) return "win";
  return "lose";
}
