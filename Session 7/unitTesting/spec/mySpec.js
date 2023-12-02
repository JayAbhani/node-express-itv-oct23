const myCode = require("../src/myCode");

describe("addNumbers function", () => {
    it("should add two numbers correctly", () => {
        const num1 = 2;
        const num2 = 3;

        const result = myCode.addNumbers(num1, num2);

        expect(result).toBe(5);
    });

    it("should handle negative numbers", () => {
        const num1 = -2;
        const num2 = 3;

        const result = myCode.addNumbers(num1, num2);

        expect(result).toBe(1);
    });
})