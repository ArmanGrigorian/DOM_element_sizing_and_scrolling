import { getCoords, moveElement } from "./utils/index.js";

const div = document.getElementById("element");
const spans = document.getElementsByTagName("span");
const controls = document.getElementById("controls");


const callback = (mutationList) => {
	for (const mutation of mutationList) {
		if (mutation.type === "childList") console.log("A child node has been added or removed.");
		else if (mutation.type === "attributes") getCoords(div, spans);
	}
};

const observer = new MutationObserver(callback);
observer.observe(div, { attributes: true, childList: true, subtree: true });

controls.addEventListener("click", (e) => moveElement(e, div));
div.addEventListener("scroll", (e) => getCoords(e.target, spans));
div.addEventListener("resize", (e) => getCoords(e.target, spans));
window.addEventListener("DOMContentLoaded", () => getCoords(div, spans));

console.group("Element");
console.table({
	"// offset //": "էլեմենտի տեղաշարժը",
	offsetParent: "css-positioned element, table, th, td, body",
	offsetTop: "offsetParent-ի վերևի ձախ անկյունից՝ y կոորդինատները",
	offsetLeft: "offsetParent-ի վերևի ձախ անկյունից՝ x կոորդինատները",
	offsetWidth: "էլեմենտի արտաքին երկարությունը՝ ներառյալ border-ը",
	offsetHeight: "էլեմենտի արտաքին բարձրությունը՝ ներառյալ border-ը",
	"// client //": "էլեմենտը կամ օգտվող",
	clientTop: "արտաքին և ներքին մասերի միջև հեռավորությունը (border)",
	clientLeft: "արտաքին և ներքին մասերի միջև հեռավորությունը ներառյալ scrollbar-ը",
	clientWidth:
		"էլեմենտի արտաքին երկարությունը՝ ներառյալ padding-ը, բայց առանց scrollbar-ի և border-ի",
	clientHeight:
		"էլեմենտի արտաքին բարձրությունը՝ ներառյալ padding-ը, բայց առանց scrollbar-ի և border-ի",
	"// scroll //": "էլեմենտի ոլորումը",
	scrollTop: "ինչքան է scroll եղել վերևից",
	scrollLeft: "ինչքան է scroll եղել ձախից",
	scrollWidth: "էլեմենտի արտաքին երկարությունը՝ ներառյալ scroll-ը",
	scrollHeight: "էլեմենտի արտաքին բարձրությունը՝ ներառյալ scroll-ը",
});
console.groupEnd();
