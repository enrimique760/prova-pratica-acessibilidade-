const toggleBtn = document.querySelector('#toggle-theme');
const body = document.body;

toggleBtn.addEventListener('click', function() {
  // Troca a classe do body
  body.classList.toggle('light');
  body.classList.toggle('dark');
});