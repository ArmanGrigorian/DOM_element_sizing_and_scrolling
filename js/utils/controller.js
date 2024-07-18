export default function controller(button, window, form, span, option) {
	let x = 0;
	let y = 20;
	let isAligned = false;

	span.textContent = `${x ? x : 0},${y ? y : 0}`;

	form.addEventListener("submit", (e) => {
		e.preventDefault();
		if (option === "scrollIntoView") {
			isAligned = form.elements.alignToTop.checked;
			span.textContent = `${isAligned}`;
		} else {
			x = form.elements.x.value;
			y = form.elements.y.value;
			span.textContent = `${x ? x : 0},${y ? y : 0}`;
		}
	});

  button.addEventListener("click", () => {
		if (option === "scrollIntoView") button.scrollIntoView(isAligned);
		else window[option](x, y);
	});
}
