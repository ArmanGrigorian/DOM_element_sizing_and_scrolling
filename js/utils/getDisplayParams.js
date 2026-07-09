export default function getDisplayParams(screenDetails) {
	if (!screenDetails) return;
	screenDetails.innerHTML = "";
	const fragment = new DocumentFragment();

	for (let key in window.screen) {
		const unnecessary = [
			"onchange",
			"orientation",
			"addEventListener",
			"dispatchEvent",
			"removeEventListener",
		];
		const val = window.screen[key];
		if (!unnecessary.includes(key) && typeof val !== "function" && typeof val !== "object") {
			const li = document.createElement("li");
			li.textContent = `${key}: ${val}${Number.isFinite(val) ? "px" : ""}`;
			fragment.append(li);
		}
	}
	screenDetails.append(fragment);
}
