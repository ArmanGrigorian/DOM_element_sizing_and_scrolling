export default function getDisplayParams(screenDetails) {
  const fragment = new DocumentFragment();
  
	for (let key in screen) {
		const unnecessary = [
			"onchange",
			"orientation",
			"addEventListener",
			"dispatchEvent",
			"removeEventListener",
		];
		if (!unnecessary.includes(key)) {
			const li = document.createElement("li");
			li.textContent = `${key}: ${screen[key]}${Number.isFinite(screen[key]) ? "px" : ""}`;
			fragment.append(li);
		}
	}
	screenDetails.append(fragment);
}
