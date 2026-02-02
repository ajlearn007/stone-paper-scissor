const STORAGE_KEY = "rps-score";

function getScore() {
  const score = JSON.parse(localStorage.getItem(STORAGE_KEY));
  return score || { user: 0, computer: 0 };
}

function setScore(score) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(score));
}
