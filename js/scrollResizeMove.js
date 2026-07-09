import { controller, initThemeToggle } from "./utils/index.js";
import { logToConsole } from "./utils/controller.js";

const buttons = {
	scrollBy: document.getElementById("scrollBy"),
	scrollTo: document.getElementById("scrollTo"),
	intoView: document.getElementById("scrollIntoView"),
	resizeBy: document.getElementById("resizeBy"),
	resizeTo: document.getElementById("resizeTo"),
	moveBy: document.getElementById("moveBy"),
	moveTo: document.getElementById("moveTo"),
	openWindow: document.getElementsByClassName("openWindow"),
};

const forms = {
	scrollBy: document.forms[0],
	scrollTo: document.forms[1],
	intoView: document.forms[2],
	resizeBy: document.forms[3],
	resizeTo: document.forms[4],
	moveBy: document.forms[5],
	moveTo: document.forms[6],
};

// Preset triggers
const presetScrollDown = document.getElementById("presetScrollDown");
const presetScrollTop = document.getElementById("presetScrollTop");
const presetScrollIntoView = document.getElementById("presetScrollIntoView");
const clearConsoleBtn = document.getElementById("clearConsoleBtn");

const initPage = () => {
	initThemeToggle();

	// Connect page scrolling controllers
	if (buttons.scrollBy && forms.scrollBy) {
		controller(buttons.scrollBy, window, forms.scrollBy, "scrollBy");
	}
	if (buttons.scrollTo && forms.scrollTo) {
		controller(buttons.scrollTo, window, forms.scrollTo, "scrollTo");
	}
	if (buttons.intoView && forms.intoView) {
		controller(buttons.intoView, window, forms.intoView, "scrollIntoView");
	}

	// Connect popup window launcher
	Array.from(buttons.openWindow || []).forEach((button) => {
		let newWindow = null;

		button.addEventListener("click", () => {
			const timeStr = new Date().toLocaleTimeString();
			try {
				newWindow = window.open(
					"",
					"testWindow",
					"width=300,height=300,left=200,top=200,resizable=yes,scrollbars=yes"
				);

				if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
					logToConsole(`[${timeStr}] [WARNING] Popup blocked by browser! Please allow popups for this file/domain.`, true);
					return;
				}

				newWindow.document.write(`
					<!DOCTYPE html>
					<html>
					<head>
						<title>Test Window — DOM Explorer Studio</title>
						<style>
							body {
								background: #0b0f17;
								color: #10b981;
								font-family: monospace;
								display: flex;
								flex-direction: column;
								align-items: center;
								justify-content: center;
								height: 100vh;
								margin: 0;
								text-align: center;
								padding: 16px;
								box-sizing: border-box;
							}
							h3 { margin-bottom: 8px; font-size: 16px; }
							p { font-size: 12px; color: #9ca3af; }
						</style>
					</head>
					<body>
						<h3>⚡ DOM Explorer Studio</h3>
						<p>Test window spawned via window.open(). Ready for dynamic resizing and repositioning APIs.</p>
					</body>
					</html>
				`);
				newWindow.document.close();

				logToConsole(`[${timeStr}] [SYSTEM] Popup window successfully launched (300×300). Connecting controllers...`);

				if (buttons.resizeBy && forms.resizeBy) {
					controller(buttons.resizeBy, newWindow, forms.resizeBy, "resizeBy");
				}
				if (buttons.resizeTo && forms.resizeTo) {
					controller(buttons.resizeTo, newWindow, forms.resizeTo, "resizeTo");
				}
				if (buttons.moveBy && forms.moveBy) {
					controller(buttons.moveBy, newWindow, forms.moveBy, "moveBy");
				}
				if (buttons.moveTo && forms.moveTo) {
					controller(buttons.moveTo, newWindow, forms.moveTo, "moveTo");
				}
			} catch (err) {
				logToConsole(`[${timeStr}] [ERROR] ${err.message}`, true);
			}
		});
	});

	// Quick Action Preset Listeners
	if (presetScrollDown) {
		presetScrollDown.addEventListener("click", () => {
			const timeStr = new Date().toLocaleTimeString();
			window.scrollBy({ top: 300, behavior: "smooth" });
			logToConsole(`[${timeStr}] Executed Preset: window.scrollBy({ top: 300, behavior: "smooth" })`);
		});
	}

	if (presetScrollTop) {
		presetScrollTop.addEventListener("click", () => {
			const timeStr = new Date().toLocaleTimeString();
			window.scrollTo({ top: 0, behavior: "smooth" });
			logToConsole(`[${timeStr}] Executed Preset: window.scrollTo({ top: 0, behavior: "smooth" })`);
		});
	}

	if (presetScrollIntoView) {
		presetScrollIntoView.addEventListener("click", () => {
			const timeStr = new Date().toLocaleTimeString();
			const targetBox = document.getElementById("scrollTargetBox");
			if (targetBox) {
				targetBox.scrollIntoView({ behavior: "smooth", block: "center" });
				logToConsole(`[${timeStr}] Executed Preset: document.getElementById("scrollTargetBox").scrollIntoView({ behavior: "smooth", block: "center" })`);
			}
		});
	}

	if (clearConsoleBtn) {
		clearConsoleBtn.addEventListener("click", () => {
			const consoleBox = document.getElementById("executionConsole");
			if (consoleBox) {
				consoleBox.innerHTML = `<div class="log-entry system-entry"><span class="timestamp">[SYSTEM]</span> Console cleared. Ready for new API events.</div>`;
			}
		});
	}
};

window.addEventListener("DOMContentLoaded", initPage);
if (document.readyState === "complete" || document.readyState === "interactive") {
	initPage();
}
