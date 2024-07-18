export default function getCoords(target, spans) {
	Array.from(spans).forEach((span) => {
		if (span.id !== "offsetTop" && span.id !== "offsetLeft") {
			spans[span.id].textContent = Number.isFinite(target[span.id]) && `${target[span.id]}px`;
		}
	});
}
