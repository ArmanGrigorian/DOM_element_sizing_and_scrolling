export default function getCoords(target, spans) {
	Array.from(spans).forEach((span) => {
		const {
			offsetTop,
			scrollTop,
			clientTop,
			offsetLeft,
			scrollLeft,
			clientLeft,
			offsetWidth,
			scrollWidth,
			clientWidth,
			offsetHeight,
			scrollHeight,
			clientHeight,
		} = target;

		switch (span.id) {
			case "offsetTop":
				span.textContent = Number.isFinite(offsetTop) && `${offsetTop}px`;
				break;
			case "scrollTop":
				span.textContent = Number.isFinite(offsetTop) && `${scrollTop}px`;
				break;
			case "clientTop":
				span.textContent = Number.isFinite(offsetTop) && `${clientTop}px`;
				break;
			case "offsetLeft":
				span.textContent = Number.isFinite(offsetTop) && `${offsetLeft}px`;
				break;
			case "scrollLeft":
				span.textContent = Number.isFinite(offsetTop) && `${scrollLeft}px`;
				break;
			case "clientLeft":
				span.textContent = Number.isFinite(offsetTop) && `${clientLeft}px`;
				break;
			case "offsetWidth":
				span.textContent = Number.isFinite(offsetTop) && `${offsetWidth}px`;
				break;
			case "scrollWidth":
				span.textContent = Number.isFinite(offsetTop) && `${scrollWidth}px`;
				break;
			case "clientWidth":
				span.textContent = Number.isFinite(offsetTop) && `${clientWidth}px`;
				break;
			case "offsetHeight":
				span.textContent = Number.isFinite(offsetTop) && `${offsetHeight}px`;
				break;
			case "scrollHeight":
				span.textContent = Number.isFinite(offsetTop) && `${scrollHeight}px`;
				break;
			case "clientHeight":
				span.textContent = Number.isFinite(offsetTop) && `${clientHeight}px`;
				break;
			default:
				break;
		}
	});
}
