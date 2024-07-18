export default function animateSpan(span) {
	span.classList.toggle("animate");
	setTimeout(() => span.classList.toggle("animate"), 400);
}
