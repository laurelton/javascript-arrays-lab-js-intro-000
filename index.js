const app = "I don't do much."

var destructivelyAppendKitten = function(name) {
  kittens.push(name);
  return kittens;
}

var destructivelyPrependKitten = function(name) {
  kittens.unshift(name);
  return kittens;
}

var destructivelyRemoveLastKitten = function() {
  kittens.pop();
  return kittens;
}

var destructivelyRemoveFirstKitten = function() {
  kittens.shift();
  return kittens;
}

var appendKitten = function(name) {
  return kittens.concat([name]);
}

var prependKitten = function(name) {
  return [name].concat(kittens);
}

var removeLastKitten = function() {
  return kittens.slice(0, kittens.length - 1);
}

var removeFirstKitten = function() {
  return kittens.slice(1);
}
