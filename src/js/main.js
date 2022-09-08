import { initGameUi } from './ui';

document.getElementById('continue-btn').addEventListener('click', () => {
  initGameUi();
});

export function getUserSelectedCategory(category) {
  return category;
}

document.getElementById('start-game-btn').addEventListener('click', () => {
  console.log('clicked');
});