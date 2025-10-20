function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const getButton = document.querySelector(".change-color")
const getSpan = document.querySelector(".color")
const getBody = document.body

getButton.addEventListener('click', () => {
  const color = getRandomHexColor();
  getBody.style.backgroundColor = color
  getSpan.textContent = color
})
