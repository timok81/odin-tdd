function capitalize(text) {
  if (text === "") return "";
  if (typeof text != "string") return null;
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function reverseString(text) {
  return text.split("").reverse().join("");
}

const calculator = {
  add: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    return a - b;
  },
  mul: function (a, b) {
    return a * b;
  },
  div: function (a, b) {
    return a / b;
  },
};

function ceasarCipher(text, shift) {
  const chars = "abcdefghijklmnopqrstuvwxyz";
  const alphabet = chars.split("");
  const alphabetUpper = chars.toUpperCase().split("");
  let newText = "";

  for (let i = 0; i < text.length; i++) {
    const indexL = alphabet.indexOf(text[i]);
    const indexU = alphabetUpper.indexOf(text[i]);
    const length = alphabet.length;
    
    //Modulo for getting correct alphabet index whether shift is positive or negative
    const modIndexL = ((indexL + shift % length) + length) % length;
    const modIndexU = ((indexU + shift % length) + length) % length;

    if (indexL != -1 || indexU != -1) {
      if (indexU != -1) {
        newText += alphabetUpper[modIndexU];
      } 
      else {
        newText += alphabet[modIndexL];
      }
    }
    //if char is anything other than a letter, just add it as-is 
    else {
      newText += text[i];
    }
  }
  return newText;
}

function analyzeArray(array) {
  const sum = array.reduce((total, current) => total + current) / array.length;
  const min = Math.min(...array);
  const max = Math.max(...array);

  return {
    average: sum,
    min: min,
    max: max,
    length: array.length,
  };
}

export { capitalize, reverseString, calculator, ceasarCipher, analyzeArray };
