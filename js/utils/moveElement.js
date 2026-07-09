import { animateSpan, getRandomColor } from "./index.js";

export default function moveElement(e, element, spans) {
	if (!element || !e.target) return;
	const offsetTopSpan = document.getElementById("offsetTop");
	const offsetLeftSpan = document.getElementById("offsetLeft");

	switch (e.target.className) {
		case "up":
			element.style.transform += "translateY(-10px)";
			element.style.borderColor = getRandomColor();
			if (offsetTopSpan) {
				const currentVal = Number.parseInt(offsetTopSpan.textContent) || element.offsetTop;
				offsetTopSpan.textContent = `${currentVal - 10}px`;
				animateSpan(offsetTopSpan);
			}
			break;
		case "right":
			element.style.transform += "translateX(10px)";
			element.style.borderColor = getRandomColor();
			if (offsetLeftSpan) {
				const currentVal = Number.parseInt(offsetLeftSpan.textContent) || element.offsetLeft;
				offsetLeftSpan.textContent = `${currentVal + 10}px`;
				animateSpan(offsetLeftSpan);
			}
			break;
		case "down":
			element.style.transform += "translateY(10px)";
			element.style.borderColor = getRandomColor();
			if (offsetTopSpan) {
				const currentVal = Number.parseInt(offsetTopSpan.textContent) || element.offsetTop;
				offsetTopSpan.textContent = `${currentVal + 10}px`;
				animateSpan(offsetTopSpan);
			}
			break;
		case "left":
			element.style.transform += "translateX(-10px)";
			element.style.borderColor = getRandomColor();
			if (offsetLeftSpan) {
				const currentVal = Number.parseInt(offsetLeftSpan.textContent) || element.offsetLeft;
				offsetLeftSpan.textContent = `${currentVal - 10}px`;
				animateSpan(offsetLeftSpan);
			}
			break;
		default:
			break;
	}
}
