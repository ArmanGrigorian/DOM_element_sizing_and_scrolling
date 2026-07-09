import { getCoordinates, getDisplayParams, getParams, initThemeToggle } from "./utils/index.js";

const screenSpans = document.getElementsByClassName("screenSpan");
const screenDetails = document.getElementById("screenDetails");
const windowSpans = document.getElementsByClassName("windowSpan");
const coordinatesSpans = document.getElementsByClassName("list__span");
const radarArena = document.getElementById("radarArena");
const hudClient = document.getElementById("hudClient");
const hudOffset = document.getElementById("hudOffset");

window.addEventListener("resize", () => getParams(screenSpans, windowSpans));
window.addEventListener("scroll", () => getParams(screenSpans, windowSpans));

window.addEventListener("mousemove", (e) => {
	getCoordinates(e, coordinatesSpans);

	// Update Radar Arena Crosshairs if cursor is inside or near the arena
	if (radarArena) {
		const rect = radarArena.getBoundingClientRect();
		const relativeX = Math.round(e.clientX - rect.left);
		const relativeY = Math.round(e.clientY - rect.top);

		radarArena.style.setProperty("--mouse-x", `${relativeX}px`);
		radarArena.style.setProperty("--mouse-y", `${relativeY}px`);

		if (hudClient) hudClient.textContent = `${Math.round(e.clientX)}, ${Math.round(e.clientY)}`;
		if (hudOffset) hudOffset.textContent = `${Math.round(e.offsetX)}, ${Math.round(e.offsetY)}`;
	}
});

const initPage = () => {
	initThemeToggle();
	getParams(screenSpans, windowSpans);
	if (screenDetails && screenDetails.children.length === 0) {
		getDisplayParams(screenDetails);
	}
	// Initial simulated mouse coordinates
	const simulatedEvent = {
		clientX: Math.round(window.innerWidth / 2),
		clientY: Math.round(window.innerHeight / 2),
		pageX: Math.round(window.innerWidth / 2),
		pageY: Math.round(window.innerHeight / 2),
		offsetX: 120,
		offsetY: 80,
		screenX: Math.round(window.screenX + window.innerWidth / 2),
		screenY: Math.round(window.screenY + window.innerHeight / 2),
		layerX: 120,
		layerY: 80
	};
	getCoordinates(simulatedEvent, coordinatesSpans);
	if (hudClient) hudClient.textContent = `${simulatedEvent.clientX}, ${simulatedEvent.clientY}`;
	if (hudOffset) hudOffset.textContent = `${simulatedEvent.offsetX}, ${simulatedEvent.offsetY}`;
	if (radarArena) {
		radarArena.style.setProperty("--mouse-x", `${Math.round(radarArena.clientWidth / 2)}px`);
		radarArena.style.setProperty("--mouse-y", `${Math.round(radarArena.clientHeight / 2)}px`);
	}
};

window.addEventListener("DOMContentLoaded", initPage);
if (document.readyState === "complete" || document.readyState === "interactive") {
	initPage();
}

console.group("DOM Explorer Studio — Screen & Window");
console.log("Real-time coordinate crosshairs and event monitoring initialized.");
console.groupEnd();
