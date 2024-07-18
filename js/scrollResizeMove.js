import { controller } from "./utils/index.js";

const buttons = {
	scrollBy: document.getElementById("scrollBy"),
	scrollTo: document.getElementById("scrollTo"),
	intoView: document.getElementById("scrollIntoView"),
	resizeBy: document.getElementById("resizeBy"),
	resizeTo: document.getElementById("resizeTo"),
	moveBy: document.getElementById("moveBy"),
	moveTo: document.getElementById("moveTo"),
	openWindow: document.getElementsByClassName("openWindow"),
};

const forms = {
	scrollBy: document.forms[0],
	scrollTo: document.forms[1],
	intoView: document.forms[2],
	resizeBy: document.forms[3],
	resizeTo: document.forms[4],
	moveBy: document.forms[5],
	moveTo: document.forms[6],
};

const spans = {
	scrollBy: buttons.scrollBy.firstElementChild,
	scrollTo: buttons.scrollTo.firstElementChild,
	intoView: buttons.intoView.firstElementChild,
	resizeBy: buttons.resizeBy.firstElementChild,
	resizeTo: buttons.resizeTo.firstElementChild,
	moveBy: buttons.moveBy.firstElementChild,
	moveTo: buttons.moveTo.firstElementChild,
};



Array.from(buttons.openWindow).forEach((button) => {
  let newWindow;
  
	button.addEventListener("click", () => {
		newWindow = window.open(
			"",
			"fdf",
			"width=300,height=300",
    );
    controller(buttons.resizeBy, newWindow, forms.resizeBy, spans.resizeBy, "resizeBy");
    controller(buttons.resizeTo, newWindow, forms.resizeTo, spans.resizeTo, "resizeTo");
    controller(buttons.moveBy, newWindow, forms.moveBy, spans.moveBy, "moveBy");
    controller(buttons.moveTo, newWindow, forms.moveTo, spans.moveTo, "moveTo");
  });
});


controller(buttons.scrollBy, window, forms.scrollBy, spans.scrollBy, "scrollBy");
controller(buttons.scrollTo, window, forms.scrollTo, spans.scrollTo, "scrollTo");
controller(buttons.intoView, window, forms.intoView, spans.intoView, "scrollIntoView");
