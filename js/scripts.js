var toRomanNumeral = function(number) {

  if (number >= 40) {
    return fortyToEightyNine(number);
  } else if (number >= 9) {
    return nineToThirtyNine(number);
  } else if (number >= 4) {
    return fourToEight(number);
  } else if (number >= 1){
    return belowFour(number);
  } else {
    alert("Please enter a number below 89.");
  }

};


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
    romanNumeral.push(belowFour(newNum));
  }

  return romanNumeral.join("");
};

var nineToThirtyNine = function(number) {
  var romanNumeral = [];
  if (number === 9) {
    romanNumeral.push("IX");

  } else {
    while (number >= 10) {
      romanNumeral.push("X");
      number -= 10;
    }
    if (number === 9) {
      romanNumeral.push("IX");

    } else if (number === 5) {
      romanNumeral.push("V");

    } else if(number < 4) {
      romanNumeral.push(belowFour(number));

    } else {
    romanNumeral.push(fourToEight(number));
    debugger;
    }
  }
  return romanNumeral.join("");
};

var fortyToEightyNine = function(number) {
  var romanNumeral = [];
  if (number === 50) {
    romanNummeral.push("L");
  } else if (number < 50) {
    romanNumeral.push("XL");
    number -= 40;
    romanNumeral.push(nineToThirtyNine(number));
  } else {
    romanNumeral.push("L");
    number -= 50;
    romanNumeral.push(nineToThirtyNine(number)); // problem with 89
  }
  return romanNumeral.join("");
};
