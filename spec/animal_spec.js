const {dog, cat } = require("../src/animal");

describe("Test if cat & dog eat food and makes sound", ()=> {
  it("Should Pass if dog eat Food", () => {
    expect(dog.eat()).toEqual("Food");
  });
  it("should Fail if dog eat food", () => {
    expect(dog.eat()).not.toEqual("food");
  });
  it("should Fail if cat Bark", () => {
    expect(cat.sounds()).not.toEqual("Bark");
  });
  it("should Pass if cat Meow", () => {
    expect(cat.sounds()).toEqual("Meow");
  });
  it("should Fail if cat eat meat", () => {
    expect(cat.eat()).not.toEqual("meat");
  });
  it("should Pass if cat eat Food", () => {
    expect(cat.eat()).toEqual("Food");
  });
  it("should Fail if cat eat food ", () => {
    expect(cat.eat()).not.toEqual("food");
  });
});