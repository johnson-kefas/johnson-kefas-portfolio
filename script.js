const root = document.documentElement;
const toggle = document.querySelector(".theme-toggle");
const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (savedTheme) {
  root.dataset.theme = savedTheme;
} else if (prefersDark) {
  root.dataset.theme = "dark";
}

function updateThemeLabel() {
  const currentTheme = root.dataset.theme === "dark" ? "Dark" : "Light";
  toggle.textContent = currentTheme;
}

updateThemeLabel();

toggle.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = nextTheme;
  localStorage.setItem("theme", nextTheme);
  updateThemeLabel();
});

document.getElementById("year").textContent = new Date().getFullYear();
