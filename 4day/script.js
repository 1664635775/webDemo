const btn = document.querySelector('.btn');
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
  btn.classList.toggle('active')
  input.classList.toggle('active')
})