let str1 = "david";
const str2 = "Alademerin";

// str1 = str1.split("").reverse().join("");
let interleaved = [];

for (let i = 0; i < str1.length; i++) {
  if (str1[i] === undefined) {
    interleaved.push(str2[i]);
  } else if (str2[i] === undefined) {
    interleaved.push(str1[i]);
  } else {
    interleaved.push(str1[i]);
    interleaved.push(str2[i]);
  }
}

console.log(interleaved.join(""));
