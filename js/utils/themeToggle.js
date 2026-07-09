export default function initThemeToggle() {
	const toggleBtn = document.getElementById("themeToggleBtn");
	if (!toggleBtn) return;

	// Prevent duplicate click listeners if called more than once
	if (toggleBtn.dataset.themeInitialized === "true") {
		return;
	}
	toggleBtn.dataset.themeInitialized = "true";

	// Check saved theme or preference
	const savedTheme = localStorage.getItem("studio_theme") || "dark";
	document.documentElement.setAttribute("data-theme", savedTheme);
	updateToggleBtnUI(toggleBtn, savedTheme);

	toggleBtn.addEventListener("click", () => {
		const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
		const newTheme = currentTheme === "dark" ? "light" : "dark";
		document.documentElement.setAttribute("data-theme", newTheme);
		localStorage.setItem("studio_theme", newTheme);
		updateToggleBtnUI(toggleBtn, newTheme);
	});
}

function updateToggleBtnUI(btn, theme) {
	if (theme === "light") {
		btn.innerHTML = `🌙 Dark Mode`;
	} else {
		btn.innerHTML = `☀️ Light Mode`;
	}
}
