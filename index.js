let priceFromUser = prompt("Enter price", "0");
let priceInNbr = parseFloat(priceFromUser);
let discount = (priceInNbr * 10) / 100;
let newPrice = priceInNbr - discount;
console.log(`New price: $${newPrice}`);
