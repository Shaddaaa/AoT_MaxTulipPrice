let ShaddasMaxTulipPrice = {};

ShaddasMaxTulipPrice.setMaxPrice = function() {
	let relevantElements = document.getElementById("main-container").children[2].children[0].children[1].children[0].children[0].children[0].children[1].children[1].children[0].children[0]
	let rangeText = relevantElements.children[0].innerHTML;
	let priceInput = relevantElements.children[2];
	let maxPrice = Number.parseFloat(rangeText.replace(/.*(and )/, "").replace(".", ""));
	priceInput.value = maxPrice;
}

ShaddasMaxTulipPrice.setupUI = function() {
    let parent = document.getElementById("main-container").children[2].children[0].children[1].children[0].children[0].children[0].children[1].children[1].children[0];

    let button = document.createElement("button");
    button.id = "ShaddasMaxTulipPriceButton";
    button.onclick = () => {
        ShaddasMaxTulipPrice.setMaxPrice();
    }

    button.innerHTML = "Max Tulip price"
    button.classList.add("btn");
    button.classList.add("btn-sm");
    button.classList.add("btn-primary");
    parent.insertBefore(document.createElement("p"), parent.children[2]);
    parent.insertBefore(button, parent.children[2]);
}

ShaddasMaxTulipPrice.keepUI = function() {
	if (document.getElementById("ShaddasMaxTulipPriceButton")==null && window.location.href == "https://ageoftrades.com/game" && document.getElementById("main-container").children[2].children[0].children[1].children[0].children[0].children[0].children[1].children[0].innerHTML == "You are the current owner of the tulip. You need to set a price.") {
		ShaddasMaxTulipPrice.setupUI();
	}
}
ShaddasMaxTulipPrice.keepUI();
ShaddasMaxTulipPrice.keepUIInterval = setInterval(ShaddasMaxTulipPrice.keepUI, 1000);