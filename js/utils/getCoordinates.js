export default function getCoordinates(e, coordinatesSpans) {
	if (!e || !coordinatesSpans) return;
	Array.from(coordinatesSpans).forEach((span) => {
		const propName = span.dataset ? span.dataset.name : null;
		if (!propName) return;
		const val = e[propName];
		span.textContent = Number.isFinite(val) ? `${Math.round(val)}px` : "0px";
	});
}
