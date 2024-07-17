export default function getCoordinates(e, coordinatesSpans) {
  Array.from(coordinatesSpans).forEach((span) => {
    let value = Number.isFinite(e[span.dataset.name]) ? `${e[span.dataset.name]}px` : "";
		span.textContent = value;
	});
}
