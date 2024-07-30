const themes = document.querySelectorAll('[name="theme"]');

let saveTheme = (theme) => {
  localStorage.setItem("theme", theme);
}
themes.forEach((currentTheme) => {
  currentTheme.addEventListener("click", () => {
    saveTheme(currentTheme.classList[1]);
  })
  if (window.matchMedia('(prefers-color-scheme: dark)')) {
    if (currentTheme.classList[1] === 'dark') {
      currentTheme.checked = true;
    }
  }
})
let loadTheme = () => {
  let savedTheme = localStorage.getItem("theme");
  themes.forEach((currentTheme) => {
    if (currentTheme.classList[1] === savedTheme) {
      currentTheme.checked = true;
    }
  })
}
loadTheme();