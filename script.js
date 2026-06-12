// ── Tab routing (hash-based, so each tab has its own URL) ──
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");
const valid = ["bio", "cv", "projects"];

function showTab(name) {
  const tab = valid.includes(name) ? name : "bio";
  panels.forEach((p) => (p.hidden = p.id !== tab));
  tabs.forEach((t) => t.classList.toggle("active", t.dataset.tab === tab));
  window.scrollTo({ top: 0 });
}

function currentTab() {
  return window.location.hash.replace("#", "");
}

window.addEventListener("hashchange", () => showTab(currentTab()));
showTab(currentTab());

// ── Theme toggle (persisted) ──
const toggle = document.getElementById("theme-toggle");
const saved = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  toggle.textContent = theme === "dark" ? "☀️" : "🌙";
}

applyTheme(saved || (prefersDark ? "dark" : "light"));

toggle.addEventListener("click", () => {
  const next =
    document.documentElement.getAttribute("data-theme") === "dark"
      ? "light"
      : "dark";
  localStorage.setItem("theme", next);
  applyTheme(next);
});

// ── Footer year ──
document.getElementById("year").textContent = new Date().getFullYear();
