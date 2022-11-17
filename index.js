var str = 'adsjfdsfsfjsdjfhacabcsbajda';
var index = 0;
var count = {};

function repeatingCharacter() {
  if (index < str.length) {
    if (count[str.charAt(index)] === undefined) {
      count[str.charAt(index)] = 1;
    } else {
      count[str.charAt(index)] = count[str.charAt(index)] + 1;
    }
    index = index + 1;
    repeatingCharacter();
  }
  return count;
}

let p = repeatingCharacter();
console.log(p);
