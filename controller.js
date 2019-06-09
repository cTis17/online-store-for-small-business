function addToCart(id){
	var element = document.getElementById(id);
	element.classList.add("disabled");
	
	var node = document.createElement("li");
	if (id == 'catBtn'){
		var textnode = document.createTextNode("Small Cat $11.99");
		var price = 11.99;
	}
	else if (id == 'lionBtn'){
		var textnode = document.createTextNode("Lion $12.99");
		var price = 12.99;
	}
	else if (id == 'mouseBtn'){
		var textnode = document.createTextNode("Mouse $11.99");
		var price = 11.99;
	}
	else if (id == 'lambBtn'){
		var textnode = document.createTextNode("Lamb $29.99");
		var price = 29.99;
	}
	else if (id == 'bunnyBlueBtn'){
		var textnode = document.createTextNode("Bunny With Blue Ears $39.99");
		var price = 39.99;
	}
	else if (id == 'bunnyPinkBtn'){
		var textnode = document.createTextNode("Bunny With Pink Ears $39.99");
		var price = 39.99;
	}
	else if (id == 'bunnyYellowCoatBtn'){
		var textnode = document.createTextNode("Bunny With Yellow Coat $69.99");
		var price = 69.99;
	}
	else if (id == 'dragonBtn'){
		var textnode = document.createTextNode("Green Dragon $44.99");
		var price = 44.99;
	}
	else if (id == 'catDuoBtn'){
		var textnode = document.createTextNode("Cat Duo $59.99");
		var price = 59.99;
	}
	else if (id == 'jellyfishBtn'){
		var textnode = document.createTextNode("Jellyfish $19.99");
		var price = 19.99;
	}
	
	node.appendChild(textnode);                              
	document.getElementById("cartList").appendChild(node);
	
	var totalPrice = document.getElementById('total').innerHTML;
	totalPrice = parseFloat(totalPrice.slice(1)) + price;
	totalPrice = totalPrice.toFixed(2);
	
	var newTotal = '$' + totalPrice;
	document.getElementById('total').innerHTML = newTotal;
}

function emptyCart() {
	if (document.getElementById('total').innerHTML != "$0.00") {
		window.location.reload();
	}
}

function openCart() {
	$('#cartModal').modal('show');
}

function checkout() {
	if (document.getElementById('total').innerHTML != "$0.00") {
		$('#checkoutModal').modal('show');
	}
}