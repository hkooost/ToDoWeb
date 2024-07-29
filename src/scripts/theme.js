const themes = document.querySelectorAll('[name="theme"]');
const themeBar = document.querySelector('.current-theme');

let saveTheme = (theme) => {
  localStorage.setItem("theme", theme);
  themeBar.innerText = theme;
}
themes.forEach((currentTheme) => {
  currentTheme.addEventListener("click", () => {
    saveTheme(currentTheme.classList[1]);
  })
  if (window.matchMedia('(prefers-color-scheme: dark)')) {
    if (currentTheme.classList[1] === 'dark') {
      currentTheme.checked = true;
      themeBar.innerText = currentTheme.classList[1];
    }
  }
})
let loadTheme = () => {
  let savedTheme = localStorage.getItem("theme");
  themes.forEach((currentTheme) => {
    if (currentTheme.classList[1] === savedTheme) {
      currentTheme.checked = true;
      themeBar.innerText = savedTheme;
    }
  })
}
loadTheme();