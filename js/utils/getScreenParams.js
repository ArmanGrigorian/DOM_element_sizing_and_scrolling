export default function getScreenParams(screenSpans) {
	Array.from(screenSpans).forEach((val) => {
		val.textContent = `${window[val.dataset.name]}px`;
	});
}
