const {Animal, Dog, Cat} = require("../src/animal");

let animal = new Animal();
let dog = new Dog();
let cat = new Cat();

test("Does dog eat Food should Pass", () => {
    expect(dog.eat()).toEqual('Food');
})
test("Does dog eat food should Fail", () => {
    expect(dog.eat()).not.toEqual('food');
});
test("Does cat Bark should Fail", () => {
    expect(cat.sounds()).not.toEqual('Bark');
});
test("Does cat Meow should Pass", () => {
    expect(cat.sounds()).toEqual('Meow');
});
test("Does cat eat meat should Fail", () => {
    expect(cat.eat()).not.toEqual('meat');
});
test("Does cat eat Food should Pass", () => {
    expect(cat.eat()).toEqual('Food');
});
test("Does cat eat food should Fail", () => {
    expect(cat.eat()).not.toEqual('food');
});