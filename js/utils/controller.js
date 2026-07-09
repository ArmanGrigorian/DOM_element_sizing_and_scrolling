export default function controller(button, targetWindow, form, option) {
	if (!button || !form) return;

	let x = 0;
	let y = 20;
	let isAligned = true;

	form.addEventListener("submit", (e) => {
		e.preventDefault();
	});

	button.addEventListener("click", () => {
		const consoleBox = document.getElementById("executionConsole");
		const timeStr = new Date().toLocaleTimeString();

		try {
			if (option === "scrollIntoView") {
				const alignCheckbox = form.elements.alignToTop;
				isAligned = alignCheckbox ? alignCheckbox.checked : true;
				const targetBox = document.getElementById("scrollTargetBox");
				if (targetBox) {
					targetBox.scrollIntoView({ behavior: "smooth", block: isAligned ? "start" : "end" });
					logToConsole(`[${timeStr}] Executed: document.getElementById("scrollTargetBox").scrollIntoView({ behavior: "smooth", block: "${isAligned ? 'start' : 'end'}" })`);
				}
			} else {
				const xVal = form.elements.x ? parseFloat(form.elements.x.value) : 0;
				const yVal = form.elements.y ? parseFloat(form.elements.y.value) : 0;
				x = isNaN(xVal) ? 0 : xVal;
				y = isNaN(yVal) ? 0 : yVal;

				if (option === "scrollBy" || option === "scrollTo") {
					targetWindow[option]({ left: x, top: y, behavior: "smooth" });
					logToConsole(`[${timeStr}] Executed: window.${option}({ left: ${x}, top: ${y}, behavior: "smooth" })`);
				} else if (typeof targetWindow[option] === "function") {
					targetWindow[option](x, y);
					logToConsole(`[${timeStr}] Executed: popupWindow.${option}(${x}, ${y})`);
				} else {
					throw new Error(`Method ${option} is not supported or popup window is closed.`);
				}
			}
		} catch (err) {
			logToConsole(`[${timeStr}] [ERROR] ${err.message}`, true);
		}
	});
}

export function logToConsole(message, isError = false) {
	const consoleBox = document.getElementById("executionConsole");
	if (!consoleBox) return;

	const entry = document.createElement("div");
	entry.className = `log-entry ${isError ? "error-entry" : ""}`;
	entry.textContent = message;
	consoleBox.appendChild(entry);
	consoleBox.scrollTop = consoleBox.scrollHeight;
}
