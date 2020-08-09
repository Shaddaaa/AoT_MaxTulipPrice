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
    button.onclick = () => {
        ShaddasMaxTulipPrice.setMaxPrice();
    }

    button.innerHTML = "Max Tulip price"
    button.classList.add("btn");
    button.classList.add("btn-sm");
    button.classList.add("btn-primary");
    parent.insertBefore(button, parent.children[2]);
}

//only call setMaxPrice if you are one the correct page AND if you are the owner of the tulip
if (window.location.href == "https://ageoftrades.com/game" && document.getElementById("main-container").children[2].children[0].children[1].children[0].children[0].children[0].children[1].children[0].innerHTML == "You are the current owner of the tulip. You need to set a price.") {
	ShaddasMaxTulipPrice.setupUI();
}