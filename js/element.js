import { getCoords, moveElement, initThemeToggle } from "./utils/index.js";

const div = document.getElementById("element");
const spans = document.getElementsByTagName("span");
const controls = document.getElementById("controls");
const resetBtn = document.getElementById("resetElementBtn");
const copyBtn = document.getElementById("copySnippetBtn");
const snippetCode = document.getElementById("liveSnippetCode");

// Box Model DOM targets
const bmTargets = {
	contentDim: document.getElementById("bmContentDim"),
	borderTop: document.getElementById("bmBorderTop"),
	borderLeft: document.getElementById("bmBorderLeft"),
	borderRight: document.getElementById("bmBorderRight"),
	borderBottom: document.getElementById("bmBorderBottom"),
	paddingTop: document.getElementById("bmPaddingTop"),
	paddingLeft: document.getElementById("bmPaddingLeft"),
	paddingRight: document.getElementById("bmPaddingRight"),
	paddingBottom: document.getElementById("bmPaddingBottom"),
	marginTop: document.getElementById("bmMarginTop"),
	marginLeft: document.getElementById("bmMarginLeft"),
	marginRight: document.getElementById("bmMarginRight"),
	marginBottom: document.getElementById("bmMarginBottom"),
};

const updateAllMetrics = () => {
	if (!div) return;
	getCoords(div, spans);
	updateBoxModelDiagram();
	updateLiveSnippet();
};

const updateBoxModelDiagram = () => {
	if (!div || !bmTargets.contentDim) return;
	const computed = window.getComputedStyle(div);

	// Border values
	if (bmTargets.borderTop) bmTargets.borderTop.textContent = computed.borderTopWidth;
	if (bmTargets.borderBottom) bmTargets.borderBottom.textContent = computed.borderBottomWidth;
	if (bmTargets.borderLeft) bmTargets.borderLeft.textContent = computed.borderLeftWidth;
	if (bmTargets.borderRight) bmTargets.borderRight.textContent = computed.borderRightWidth;

	// Padding values
	if (bmTargets.paddingTop) bmTargets.paddingTop.textContent = computed.paddingTop;
	if (bmTargets.paddingBottom) bmTargets.paddingBottom.textContent = computed.paddingBottom;
	if (bmTargets.paddingLeft) bmTargets.paddingLeft.textContent = computed.paddingLeft;
	if (bmTargets.paddingRight) bmTargets.paddingRight.textContent = computed.paddingRight;

	// Margin values
	if (bmTargets.marginTop) bmTargets.marginTop.textContent = computed.marginTop || "0px";
	if (bmTargets.marginBottom) bmTargets.marginBottom.textContent = computed.marginBottom || "0px";
	if (bmTargets.marginLeft) bmTargets.marginLeft.textContent = computed.marginLeft || "0px";
	if (bmTargets.marginRight) bmTargets.marginRight.textContent = computed.marginRight || "0px";

	// Content dimensions (clientWidth minus padding)
	const padL = parseFloat(computed.paddingLeft) || 0;
	const padR = parseFloat(computed.paddingRight) || 0;
	const padT = parseFloat(computed.paddingTop) || 0;
	const padB = parseFloat(computed.paddingBottom) || 0;

	const contentW = Math.round(div.clientWidth - padL - padR);
	const contentH = Math.round(div.clientHeight - padT - padB);

	bmTargets.contentDim.textContent = `${contentW} × ${contentH}`;
};

const updateLiveSnippet = () => {
	if (!snippetCode || !div) return;
	snippetCode.textContent = `const element = document.getElementById("element");
// Current live Box & Scroll dimensions:
console.log({
  offsetWidth: element.offsetWidth,   // ${div.offsetWidth}px
  offsetHeight: element.offsetHeight, // ${div.offsetHeight}px
  clientWidth: element.clientWidth,   // ${div.clientWidth}px
  clientHeight: element.clientHeight, // ${div.clientHeight}px
  scrollTop: element.scrollTop,       // ${Math.round(div.scrollTop)}px
  scrollLeft: element.scrollLeft      // ${Math.round(div.scrollLeft)}px
});`;
};

// MutationObserver to watch attributes and children changes
const callback = (mutationList) => {
	for (const mutation of mutationList) {
		if (mutation.type === "childList") {
			console.log("Child node changed.");
		}
		updateAllMetrics();
	}
};

const observer = new MutationObserver(callback);
if (div) {
	observer.observe(div, { attributes: true, childList: true, subtree: true });
}

// Event Listeners
if (controls && div) {
	controls.addEventListener("click", (e) => {
		moveElement(e, div, spans);
		setTimeout(updateAllMetrics, 50);
	});
}

if (resetBtn && div) {
	resetBtn.addEventListener("click", () => {
		div.style.transform = "translate(0px, 0px)";
		div.style.width = "320px";
		div.style.height = "320px";
		div.style.borderColor = "rgba(16, 185, 129, 0.8)";
		updateAllMetrics();
	});
}

if (copyBtn && snippetCode) {
	copyBtn.addEventListener("click", async () => {
		try {
			await navigator.clipboard.writeText(snippetCode.textContent);
			const originalText = copyBtn.innerHTML;
			copyBtn.innerHTML = "✓ Copied to Clipboard!";
			copyBtn.classList.add("copied");
			setTimeout(() => {
				copyBtn.innerHTML = originalText;
				copyBtn.classList.remove("copied");
			}, 2000);
		} catch (err) {
			console.error("Failed to copy code snippet: ", err);
		}
	});
}

if (div) {
	div.addEventListener("scroll", updateAllMetrics);
	div.addEventListener("resize", updateAllMetrics);
	// Also watch window resize
	window.addEventListener("resize", updateAllMetrics);
}

window.addEventListener("DOMContentLoaded", () => {
	initThemeToggle();
	updateAllMetrics();
});

// Also run immediately in case DOMContentLoaded already fired
if (document.readyState === "complete" || document.readyState === "interactive") {
	initThemeToggle();
	updateAllMetrics();
}
