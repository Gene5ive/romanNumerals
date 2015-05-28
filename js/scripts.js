var belowFour = function(number) {
  var romanNumeral = "";
  for(var i = 1; i <= number; i++) {
    romanNumeral += "I";
  };
  return romanNumeral;
};

var fourToEight = function(number) {
  var romanNumeral = [];
  if (number === 4) {
    romanNumeral.push("IV");
  } else {
    romanNumeral.push("V");
    var newNum = number - 5;
    for(var i = 1; i <= newNum; i++) {
      romanNumeral.push("I");
    }
  }
  return romanNumeral.join("");
};

var nineToEighteen = function(number) {
  var romanNumeral = [];
  if (number === 9) {
    romanNumeral.push("IX");
  } else {
    if (number === 10) {
    romanNumeral.push("X");
    } else {
      debugger;
      romanNumeral.push("X");
      var newNum = number - 10;
        if (newNum < 4) {
          romanNumeral.push(belowFour(newNum));
        } else {
      romanNumeral.push(fourToEight(newNum));
      }
    }
  }
  return romanNumeral.join("");
};
