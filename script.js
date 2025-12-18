document.addEventListener('DOMContentLoaded', () => {
  const themeButton = document.getElementById('themeButton');
  let darkMode = false;

  if (themeButton) {
      themeButton.addEventListener('click', () => {
          darkMode = !darkMode;
          themeButton.classList.add('rotate');

          setTimeout(() => {
              themeButton.textContent = darkMode ? '☀️' : '🌙';
          }, 200);

          setTimeout(() => {
              themeButton.classList.remove('rotate');
          }, 400);

          document.body.classList.toggle('dark-theme', darkMode);
      });
  }
});