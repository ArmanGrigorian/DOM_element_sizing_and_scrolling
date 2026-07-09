export default function getCoords(target, spans) {
	if (!target || !spans) return;
	Array.from(spans).forEach((span) => {
		if (!span.id || span.id === "offsetTop" || span.id === "offsetLeft") return;
		if (span.id in target && Number.isFinite(target[span.id])) {
			span.textContent = `${Math.round(target[span.id])}px`;
		}
	});
}
