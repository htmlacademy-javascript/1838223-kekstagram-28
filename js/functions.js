const checkLength = (stringTested, quantityLetters) => {
  if (stringTested.length <= quantityLetters) {
    return true;
  }
  return false;
};

checkLength('проверяемая строка', 20);

const checkPalindrom = (word) => {
  for (let i = 0; i < word.length / 2; i++) {
    if (word.at(i) !== word.at(-i - 1)) {
      return false;
    }
  }
  return true;
};

checkPalindrom('топот');

const extractNumber = (string) => {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }
  return parseInt(result, 10);
};

extractNumber('2023 год');

const addSymbol = (start, min, additionalString) => {
  const actualPad = min - start.length;
  if (actualPad <= 0) {
    return start;
  }
  return additionalString.slice(0, actualPad % additionalString.length) + additionalString.repeat(actualPad / additionalString.length) + start;
};

addSymbol('1', 2, '0');
