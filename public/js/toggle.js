const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const html = document.documentElement;

function updateIcon() {
  if (html.classList.contains("dark")) {
    themeIcon.innerHTML = `
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    `;
  } else {
    themeIcon.innerHTML = `
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M21 12.79A9 9 0 1111.21 3c0 .21-.01.42-.01.63A9 9 0 0021 12.79z"
      />
    `;
  }
}

if (localStorage.getItem("theme") === "dark") {
  html.classList.add("dark");
} else if (localStorage.getItem("theme") === "light") {
  html.classList.remove("dark");
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  html.classList.add("dark");
}

updateIcon();

themeToggle.addEventListener("click", () => {
  html.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    html.classList.contains("dark") ? "dark" : "light"
  );
  updateIcon();
});