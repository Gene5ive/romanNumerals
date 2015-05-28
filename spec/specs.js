describe('belowFour', function() {
  it("returns the roman numeral for any number below 4", function() {
    expect(belowFour(3)).to.eql("III");
  });
});

describe('fourToEight', function() {
  it("returns the roman number for 4", function() {
      expect(fourToEight(4)).to.eql("IV");
  });
  it("returns the roman number for 5", function() {
    expect(fourToEight(5)).to.eql("V");
  });
  it("returns the roman number for 6", function() {
    expect(fourToEight(6)).to.eql("VI");
  });
  it("returns the roman number for 8", function() {
    expect(fourToEight(8)).to.eql("VIII");
  });
});

describe('nineToThirtyNine', function() {
  it("returns the roman numeral for 9", function() {
    expect(nineToThirtyNine(9)).to.eql("IX");
  });
  it("returns the roman numeral for 10", function() {
    expect(nineToThirtyNine(10)).to.eql("X");
  });
  it("returns the roman numeral for 15", function() {
    expect(nineToThirtyNine(15)).to.eql("XV");
  });
  it("returns the roman numeral for 27", function() {
    expect(nineToThirtyNine(27)).to.eql("XXVII");
  })
  it("returns the roman numeral for 39", function() {
    expect(nineToThirtyNine(39)).to.eql("XXXIX");
  })
});

describe('fortyToEightyNine', function () {
  it("returns the roman numeral for 40", function() {
    expect(fortyToEightyNine(40)).to.equal("XL");
  });
  it("returns the roman numeral for 47", function() {
    expect(fortyToEightyNine(47)).to.equal("XLVII");
  });
  it("returns the roman numeral for 52", function() {
    expect(fortyToEightyNine(52)).to.equal("LII");
  });
  it("returns the roman numeral for 86", function() {
    expect(fortyToEightyNine(86)).to.equal("LXXXVI");
  });
  it("returns the roman numeral for 89", function() {
    expect(fortyToEightyNine(89)).to.equal("LXXXIX");
  });

});

describe('toRomanNumeral', function() {
  it("returns the roman numeral of 57", function() {
    expect(toRomanNumeral(57)).to.equal("LVII");
  });
  it("returns the roman numeral for 52", function() {
    expect(toRomanNumeral(52)).to.equal("LII");
  });
  it("returns the roman numeral for 27", function() {
    expect(toRomanNumeral(27)).to.eql("XXVII");
  })
  it("returns the roman number for 6", function() {
    expect(toRomanNumeral(6)).to.eql("VI");
  });
  it("returns the roman numeral for any number below 4", function() {
    expect(toRomanNumeral(3)).to.eql("III");
  });
});
