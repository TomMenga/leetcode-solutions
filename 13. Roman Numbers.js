const RomanValues = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000,
}

var romanToInt = function (s) {
  if (typeof(s) !== 'string') {
    throw new Error('s is not a string');
  }

  let result = 0;

  for(let i = 0; i< s.length; i++) {
    const char = s[i];
    const nextChar = i + 1 < s.length ? s[i+1] : null;
    
    if (nextChar && RomanValues[char] < RomanValues[nextChar]) {
      result += RomanValues[nextChar] - RomanValues[char];
      i++;
    } else {
      result += RomanValues[char];
    }

  }

  return result;
};

var res = romanToInt('XIV');
console.log(res);