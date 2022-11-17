var str = 'adsjfdsfsfjsdjfhacabcsbajda';
var index = 0;
var count = {};

function test() {
  if (index < str.length) {
    if (count[str.charAt(index)] === undefined) {
      count[str.charAt(index)] = 1;
    } else {
      count[str.charAt(index)] = count[str.charAt(index)] + 1;
    }
    index = index + 1;
    test();
  }
  return count;
}

let p = test();
console.log(p);
