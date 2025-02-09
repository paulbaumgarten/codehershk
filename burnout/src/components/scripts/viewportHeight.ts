export default function viewportHeight() {
	const testDiv = document.createElement("div");
	testDiv.style.height = "100vh";
	testDiv.style.position = "absolute";
	testDiv.style.top = "-9999px";
	document.body.appendChild(testDiv);
	const accurateHeight = testDiv.offsetHeight;
	if (document.body) {
		document.body.removeChild(testDiv);
		return accurateHeight;
	} else {
		return viewportHeight();
	}
}
