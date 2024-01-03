
// generating arrays
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  // Use a destructive method to append a cat to the original array
  cats.push(name);
}

function destructivelyPrependCat(name) {
  // Use a destructive method to prepend a cat to the original array
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  // Use a destructive method to remove the last cat from the original array
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  // Use a destructive method to remove the first cat from the original array
  cats.shift();
}

function appendCat(name) {
  // Use a non-destructive method to append a cat to a new array
  return [...cats, name];
}

function prependCat(name) {
  // Use a non-destructive method to prepend a cat to a new array
  return [name, ...cats];
}

function removeLastCat() {
  // Use a non-destructive method to remove the last cat from a new array
  return cats.slice(0, -1);
}

function removeFirstCat() {
  // Use a non-destructive method to remove the first cat from a new array
  return cats.slice(1);
}

// Export the array for testing purposes
module.exports = cats;

