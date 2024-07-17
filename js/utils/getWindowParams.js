export default function getWindowParams(windowSpans) {
	Array.from(windowSpans).forEach((val) => {
		val.textContent = `${window[val.dataset.name]}px`;
	});
}
