const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  // write your solution here
  let result = [];

  while (expr.length > 0) {
    let symbol = '';
    let letter = '';
    let char = expr.slice(0, 10);
    for (let i = 0; i < char.length; i++) {
      symbol += char[i];
      if (symbol === '00') {
        symbol = '';
        continue;
      } else if (symbol === '10') {
        letter += '.';
        symbol = '';
        continue;
      } else if (symbol === '11') {
        letter += '-';
        symbol = '';
        continue;
      }
    }
    result.push(letter);
    expr = expr.slice(10);
  }
  return result.reduce((prev, cur) => {
    return (prev += cur === '' ? ' ' : MORSE_TABLE[cur]);
  }, '');
}

module.exports = {
  decode,
};
