import { getScreenParams, getWindowParams } from "./index.js";

export default function getParams(screenSpans, windowSpans) {
	getScreenParams(screenSpans);
	getWindowParams(windowSpans);
}
