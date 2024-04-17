import { sumOfTwoNumbers } from "../../app/learning/TestFile.ts";

describe("TestFile test suite", () => {
  it("should return sum of 1 and 4", () => {
    const actual = sumOfTwoNumbers(1, 4);
    expect(actual).toBe(5);
  });
});
