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
