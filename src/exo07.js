// example data (other data will be used in unit tests)
const products = [
  { type: "vegetable", name: "Carrot", quantity: 3, unitPrice: 5 },
  { type: "vegetable", name: "Cabbage", quantity: 1, unitPrice: 10 },
  { type: "vegetable", name: "Potato", quantity: 10, unitPrice: 1 },
  { type: "fruit", name: "Apple", quantity: 6, unitPrice: 2 },
  { type: "fruit", name: "Pear", quantity: 6, unitPrice: 3 }
];

// solve the exercise using arrow functions
// check out the Array methods cheat sheet for help

export function getProductNames(products) {
  // return the list of product names
  return products.map((product) => product.name);
}

export function getFruits(products) {
  // return only the fruits
  return products.filter((product) => product.type === "fruit");
}

export function calcTotalPrice(products) {
  // return total price of all products (unitPrice * quantity)
  let totalPrice = products.reduce(
    (currentSum, currentProduct) =>
      currentSum + currentProduct.quantity * currentProduct.unitPrice,
    0
  );

  return totalPrice;
}

export function calcTotalPrice2(products) {
  // return total price of all products (unitPrice * quantity)
  let totalPrice = 0;

  for (let i = 0; i < products.length; i++) {
    totalPrice += products[i].unitPrice * products[i].quantity;
  }

  return totalPrice;
}

export function calcTotalPrice3(products) {
  // return total price of all products (unitPrice * quantity)
  let totalPrice = 0;
  products.forEach((product) => {
    totalPrice += product.quantity * product.unitPrice;
  });

  return totalPrice;
}
