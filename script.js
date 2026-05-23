const themeToggle = document.querySelector("#themeToggle");
const themeFromUrl = new URLSearchParams(window.location.search).get("theme");
const savedTheme = themeFromUrl || getStoredTheme();

function getStoredTheme() {
  try {
    return localStorage.getItem("theme");
  } catch (error) {
    return null;
  }
}

function saveTheme(theme) {
  try {
    localStorage.setItem("theme", theme);
  } catch (error) {
    // 如果浏览器限制本地存储，主题切换仍然可以在当前页面生效。
  }
}

function updateThemeButton(isDarkMode) {
  if (!themeToggle) {
    return;
  }

  themeToggle.textContent = isDarkMode ? "☀️" : "🌙";
  themeToggle.setAttribute("aria-label", isDarkMode ? "切换到浅色模式" : "切换到深色模式");
  themeToggle.setAttribute("title", isDarkMode ? "切换到浅色模式" : "切换到深色模式");
}

function updateInternalThemeLinks(theme) {
  const links = document.querySelectorAll('a[href$=".html"], a[href*=".html#"], a[href*=".html?"]');

  links.forEach((link) => {
    const url = new URL(link.getAttribute("href"), window.location.href);
    url.searchParams.set("theme", theme);
    link.href = url.href;
  });
}

document.body.classList.toggle("dark-mode", savedTheme === "dark");
const initialTheme = document.body.classList.contains("dark-mode") ? "dark" : "light";
saveTheme(initialTheme);
updateThemeButton(initialTheme === "dark");
updateInternalThemeLinks(initialTheme);

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDarkMode = document.body.classList.contains("dark-mode");
    const theme = isDarkMode ? "dark" : "light";

    saveTheme(theme);
    updateThemeButton(isDarkMode);
    updateInternalThemeLinks(theme);
  });
}
