let priceFromUser1 = prompt("Enter price", "0");
let priceFromUser2 = priceFromUser1.slice(1);
let priceInNbr = parseFloat(priceFromUser2);
let discount = (priceInNbr * 10) / 100;
let newPrice = priceInNbr - discount;
console.log(`New price: $${newPrice}`);
