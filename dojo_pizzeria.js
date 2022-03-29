function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var p1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(p1);

var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(p2);

var p3 = pizzaOven("deep dish", "traditional", ["peperjack"], ["pepperoni", "sausage", "ham"]);
console.log(p3);

var p4 = pizzaOven("hand tossed", "BBQ", ["chedder"], ["chicken", "mushrooms", "peppers"]);
console.log(p4);


var pizza = [
    "pizza 1",
    "pizza 2",
    "pizza 3",
    "pizza 4"
]

function randomPizza (myArr) {
    var arrNum = Math.floor(Math.random() * myArr.length);
    return myArr[arrNum];
}

console.log(randomPizza(pizza));