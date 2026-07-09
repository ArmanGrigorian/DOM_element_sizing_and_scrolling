export default function getScreenParams(screenSpans) {
	if (!screenSpans) return;
	Array.from(screenSpans).forEach((val) => {
		const propName = val.dataset ? val.dataset.name : null;
		if (!propName) return;
		const propVal = propName in window.screen ? window.screen[propName] : window[propName];
		val.textContent = Number.isFinite(propVal) ? `${Math.round(propVal)}px` : "0px";
	});
}
