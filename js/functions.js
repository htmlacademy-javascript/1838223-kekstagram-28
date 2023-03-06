const checkLength = (stringTested, countLetters) => {
  if (stringTested.length <= countLetters) {
    return true;
  }
  return false;
};


const checkPalindrom = (word) => {
  for (let i = 0; i < word.length; i++) {
    if (word.at(i) !== word.at(-i - 1)) {
      return false;
    }
  }
  return true;
};


const importNumber = (string) => {
  let result = '';
  for (let i=0; i<string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }
  return parseInt(result, 10);
}

const addSymbol = (start, min, addString) => {
  const actualPad = min - start.length;
  if (actualPad <= 0) {
    return start;
  }
  return addString.slice(0, actualPad % addString.length) + addString.repeat(actualPad / addString.length) + start;
}

