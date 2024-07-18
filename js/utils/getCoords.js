export default function getCoords(target, spans) {
	Array.from(spans).forEach((span) => {
		spans[span.id].textContent = Number.isFinite(target[span.id]) && `${target[span.id]}px`;
	});
}
