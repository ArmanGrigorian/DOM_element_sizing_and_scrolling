import { getCoordinates, getDisplayParams, getParams } from "./utils/index.js";

// Screen
// Window
// Coordinates

const screenSpans = document.getElementsByClassName("screenSpan");
const screenDetails = document.getElementById("screenDetails");
const windowSpans = document.getElementsByClassName("windowSpan");
const coordinatesSpans = document.getElementsByClassName("list__span");

window.addEventListener("resize", () => getParams(screenSpans, windowSpans));
window.addEventListener("scroll", () => getParams(screenSpans, windowSpans));
window.addEventListener("mousemove", (e) => getCoordinates(e, coordinatesSpans));
window.addEventListener("DOMContentLoaded", () => {
	getParams(screenSpans, windowSpans);
	getDisplayParams(screenDetails);
	getCoordinates(window, coordinatesSpans);
});

console.group("screen");
console.table({
	"// screen //": "",
	screen: screen,
	screenTop: screenTop,
	screenLeft: screenLeft,
	screenX: screenX,
	screenY: screenY,
});
console.groupEnd();

console.group("window");
console.table({
	"// outer //": "",
	outerWidth: "window—ի երկարությունը՝ ներառյալ sidebar-ը, window chrome-ը և resizing border-ը",
	outerHeight:
		"window—ի բարձրությունը՝ ներառյալ բոլոր sidebar-երը, window chrome-ը և resizing border-ը",
	"// inner //": "",
	innerWidth: "window—ի երկարությունը՝ ներառում է scrollbar-ը, եթե այն առկա է",
	innerHeight: "window—ի բարձրությունը՝ ներառում է scrollbar-ը, եթե այն առկա է",
	"// scrolling //": "",
	scrollX: "ցույց է տալիս թե որքան է document-ը scroll եղած վերևից",
	scrollY: "ցույց է տալիս թե որքան է document-ը scroll եղած վերևից",
	pageXOffset: "deprecated: փոխարինել scrollX",
	pageYOffset: "deprecated: փոխարինել scrollY",
});
console.groupEnd();

console.group("Coordinates");
console.table({
	"// screen //": "հաշվում է monitor/window-ից",
	screenX: "mouseEvent-ի հորիզոնական կոորդինատը` monitor/window-ի ձախ եզրից",
	screenY: "mouseEvent-ի ուղղահայաց կոորդինատը` monitor/window-ի վերևի եզրից",
	"// offset //": "հաշվում է ծնողի padding-ից",
	offsetX:
		"mouseEvent-ի հորիզոնական կոորդինատը, որը ցույց է տալիս տեղաշարժը այդ event-ի և target node-ի padding edge-ի միջև",
	offsetY:
		"mouseEvent-ի ուղղահայաց կոորդինատը, որը ցույց է տալիս տեղաշարժը այդ event-ի և target node-ի padding edge-ի միջև",
	"// page //": "հաշվում է document-ից",
	pageX:
		"mouseEvent-ի հորիզոնական կոորդինատը` document-ի ձախ եզրից, որը ներառում է նաև փաստաթղթի այն հատվածը, որը տեսանելի չէ",
	pageY:
		"mouseEvent-ի ուղղահայաց կոորդինատը` document-ի վերևի եզրից, որը ներառում է նաև փաստաթղթի այն հատվածը, որը տեսանելի չէ",
	"// client //": "հաշվում է viewport-ից",
	clientX:
		"mouseEvent-ի հորիզոնական կոորդինատը viewport-ի ձախ եզրից, որը ի տարբերություն pageX-ի չի ներառում փաստաթղթի այն հատվածը, որը տեսանելի չէ",
	clientY:
		"mouseEvent-ի ուղղահայաց կոորդինատը viewport-ի ձախ եզրից, որը ի տարբերություն pageY-ի չի ներառում փաստաթղթի այն հատվածը, որը տեսանելի չէ",
	"// layer //": "հաշվում է layer-ից",
	layerX: "Non-standard: mouseEvent-ի հորիզոնական կոորդինատը ընթացիկ շերտի/layer-ի համեմատ:",
	layerY: "Non-standard: mouseEvent-ի ուղղահայաց կոորդինատը ընթացիկ շերտի/layer-ի համեմատ:",
});
console.groupEnd();
