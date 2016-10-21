
var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

console.log("The contents of ingredients:")

var i = 0;
while (i < 8) {
  console.log(ingredients[i]);
  i++;
}

for (var i = 0; i < 8; i++) {
  console.log(ingredients[i]);
}

for (var i = 7; i > 0; i--) {
  console.log(ingredients[i]);
}