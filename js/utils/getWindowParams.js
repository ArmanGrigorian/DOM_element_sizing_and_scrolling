export default function getWindowParams(windowSpans) {
	if (!windowSpans) return;
	Array.from(windowSpans).forEach((val) => {
		const propName = val.dataset ? val.dataset.name : null;
		if (!propName) return;
		const propVal = window[propName];
		val.textContent = Number.isFinite(propVal) ? `${Math.round(propVal)}px` : "0px";
	});
}
