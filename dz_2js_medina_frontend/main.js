// 1. Проверка на валидность Gmail почты
const emailValidation = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  return emailRegex.test(email);
};

// 2. Двигающийся блок по кругу (вправо, вниз, влево, вверх)
let positionX = 0; // Позиция по оси X
let positionY = 0; // Позиция по оси Y
let direction = 'right'; // Направление движения блока
const block = document.querySelector('.moving-block');
const parent = document.querySelector('.parent-block');
const blockSize = 50; // Размер блока

const moveBlock = () => {
  const parentSize = parent.offsetWidth; // Получаем размер родительского блока

  // Логика движения блока по кругу
  if (direction === 'right' && positionX < parentSize - blockSize) {
    positionX += 5; // Двигаем вправо
  } else if (direction === 'right') {
    direction = 'down';
  } else if (direction === 'down' && positionY < parentSize - blockSize) {
    positionY += 5; // Двигаем вниз
  } else if (direction === 'down') {
    direction = 'left';
  } else if (direction === 'left' && positionX > 0) {
    positionX -= 5; // Двигаем влево
  } else if (direction === 'left') {
    direction = 'up';
  } else if (direction === 'up' && positionY > 0) {
    positionY -= 5; // Двигаем вверх
  } else if (direction === 'up') {
    direction = 'right';
  }

  // Обновляем позицию блока
  block.style.left = `${positionX}px`;
  block.style.top = `${positionY}px`;

  // Повторно вызываем функцию для продолжения движения
  requestAnimationFrame(moveBlock);
};

// 3. Счетчик с кнопками Start, Stop и Reset
let count = 0;
let counterInterval = null;

const counterDisplay = document.querySelector('.counter-display');

const updateCounter = () => {
  counterDisplay.textContent = count;
};

const startCounter = () => {
  if (counterInterval) return; // Если счетчик уже работает, не запускаем его повторно
  counterInterval = setInterval(() => {
    count++;
    updateCounter();
  }, 1000); // Увеличиваем счетчик каждую секунду
};

const stopCounter = () => {
  clearInterval(counterInterval);
  counterInterval = null;
};

const resetCounter = () => {
  count = 0;
  updateCounter();
  stopCounter();
};

// Обработчики событий для кнопок
document.querySelector('.start-button').addEventListener('click', startCounter);
document.querySelector('.stop-button').addEventListener('click', stopCounter);
document.querySelector('.reset-button').addEventListener('click', resetCounter);

// Запуск движения блока
moveBlock();
