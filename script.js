let ShaddasMaxTulipPriceMod = {};

ShaddasMaxTulipPrice.setMaxPrice = function() {
	let relevantElements = document.getElementById("main-container").children[2].children[0].children[1].children[0].children[0].children[0].children[1].children[1].children[0].children[0]
	let rangeText = relevantElements.children[0].innerHTML;
	let priceInput = relevantElements.children[2];
	let maxPrice = Number.parseFloat(rangeText.replace(/.*(and )/, "").replace(".", ""));
	priceInput.value = maxPrice;
}
if (window.location.href == "https://ageoftrades.com/game") {
	ShaddasMaxTulipPrice.setMaxPrice();
}