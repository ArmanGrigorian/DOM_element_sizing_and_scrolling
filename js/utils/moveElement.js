export default function moveElement(e, element) {
	switch (e.target.className) {
		case "up":
			element.style.top = element.offsetTop - element.clientTop - 10 + "px";
			break;
		case "right":
			element.style.left = element.offsetLeft - 6 + "px";
			break;
		case "down":
			element.style.top = element.offsetTop - 6 + "px";
			break;
		case "left":
			element.style.left = element.offsetLeft - element.clientLeft - 10 + "px";
			break;
		default:
			break;
	}
}
