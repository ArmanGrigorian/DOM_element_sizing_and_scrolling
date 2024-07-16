import { getCoords, moveElement } from "./utils/index.js";

// Element
// Window
// Coordinates

// 1️⃣ Element - ի կորդինատներ
const div = document.getElementById("element");
const spans = document.getElementsByTagName("span");
const controls = document.getElementById("controls");

controls.addEventListener("click", (e) => moveElement(e, div));
div.addEventListener("scroll", (e) => getCoords(e.target, spans));
div.addEventListener("resize", (e) => getCoords(e.target, spans));

const callback = (mutationList) => {
	for (const mutation of mutationList) {
		if (mutation.type === "childList") console.log("A child node has been added or removed.");
		else if (mutation.type === "attributes") getCoords(div, spans);
	}
};

const observer = new MutationObserver(callback);
observer.observe(div, { attributes: true, childList: true, subtree: true });

console.group("Element");
console.table({
	"// offset //": "էլեմենտի տեղաշարժը",
	offsetParent: "css-positioned element, table, th, td, body",
	offsetTop: "offsetParent-ի վերևի ձախ անկյունից՝ y կոորդինատները",
	offsetLeft: "offsetParent-ի վերևի ձախ անկյունից՝ x կոորդինատները",
	offsetWidth: "էլեմենտի արտաքին երկարությունը՝ ներառյալ border-ը:",
	offsetHeight: "էլեմենտի արտաքին բարձրությունը՝ ներառյալ border-ը",
	"// client //": "էլեմենտը կամ օգտվող",
	clientTop: "",
	clientLeft: "",
	clientWidth: "",
	clientHeight: "",
	"// scroll //": "էլեմենտի ոլորումը",
	scrollTop: "",
	scrollLeft: "",
	scrollWidth: "",
	scrollHeight: "",
});
console.groupEnd();
