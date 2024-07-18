import { animateSpan, getRandomColor } from "./index.js";

export default function moveElement(e, element, spans) {
	switch (e.target.className) {
		case "up":
			element.style.transform += "translateY(-10px)";
			element.style.borderColor = getRandomColor();
			console.log(spans.offsetTop.textContent);
			spans.offsetTop.textContent = `${
				(Number.parseInt(spans.offsetTop.textContent) || element.offsetTop) + 10
			}px`;
			animateSpan(spans.offsetTop);
			break;
		case "right":
			element.style.transform += "translateX(10px)";
			element.style.borderColor = getRandomColor();
			spans.offsetLeft.textContent = `${
				(Number.parseInt(spans.offsetLeft.textContent) || element.offsetLeft) + 10
			}px`;
			animateSpan(spans.offsetLeft);
			break;
		case "down":
			element.style.transform += "translateY(10px)";
			element.style.borderColor = getRandomColor();
			spans.offsetTop.textContent = `${
				(Number.parseInt(spans.offsetTop.textContent) || element.offsetTop) - 10
			}px`;
			animateSpan(spans.offsetTop);
			break;
		case "left":
			element.style.transform += "translateX(-10px)";
			element.style.borderColor = getRandomColor();
			spans.offsetLeft.textContent = `${
				(Number.parseInt(spans.offsetLeft.textContent) || element.offsetLeft) - 10
			}px`;
			animateSpan(spans.offsetLeft);
			break;
		default:
			break;
	}
}
