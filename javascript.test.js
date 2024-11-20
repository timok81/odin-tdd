import {
  capitalize,
  reverseString,
  calculator,
  ceasarCipher,
  analyzeArray,
} from "./javascript.js";

describe("capitalize", () => {
  test("Function is defined", () => {
    expect(capitalize).toBeDefined;
  });

  test("First character is capitalized", () => {
    expect(capitalize("string")).toEqual("String");
  });

  test("Returns empty string empty", () => {
    expect(capitalize("")).toEqual("");
  });

  test("Returns null when not given a string", () => {
    expect(capitalize(50)).toBe(null);
  });
});

describe("reverseString", () => {
  test("Function is defined", () => {
    expect(reverseString).toBeDefined;
  });

  test("Single word is reversed", () => {
    expect(reverseString("word")).toEqual("drow");
  });

  test("Multiple words are reversed", () => {
    expect(reverseString("word to the bird")).toEqual("drib eht ot drow");
  });

  test("Capitalization is maintained", () => {
    expect(reverseString("Word to the Bird")).toBe("driB eht ot droW");
  });
});

describe("calculator", () => {
  test("Function is defined", () => {
    expect(calculator).toBeDefined;
  });

  test("Addition works", () => {
    expect(calculator.add(2, 3)).toEqual(5);
  });

  test("Subtraction works", () => {
    expect(calculator.sub(5, 3)).toEqual(2);
  });

  test("Division works", () => {
    expect(calculator.div(10, 2)).toEqual(5);
  });

  test("Multiplying works", () => {
    expect(calculator.mul(5, 3)).toEqual(15);
  });
});

describe("ceasarCipher", () => {
  test("Function is defined", () => {
    expect(ceasarCipher).toBeDefined;
  });

  test("Single word works", () => {
    expect(ceasarCipher("abc", 3)).toEqual("def");
  });

  test("Capitalization word works", () => {
    expect(ceasarCipher("Abc", 3)).toEqual("Def");
  });

  test("Wrapping works", () => {
    expect(ceasarCipher("xyz", 3)).toEqual("abc");
  });

  test("Multiple words works", () => {
    expect(ceasarCipher("abc xyz", 3)).toEqual("def abc");
  });

  test("Special characters works", () => {
    expect(ceasarCipher("abc, xyz!", 3)).toEqual("def, abc!");
  });

  test("Negative shift values works", () => {
    expect(ceasarCipher("abc", -3)).toEqual("xyz");
  });
});

describe("analyzeArray", () => {
  test("Function is defined", () => {
    expect(analyzeArray).toBeDefined;
  });

  test("Average is correct", () => {
    const result = analyzeArray([1, 2, 3, 4]);
    expect(result.average).toEqual(2.5);
  });

  test("Min is correct", () => {
    const result = analyzeArray([1, 2, 3, 4]);
    expect(result.min).toEqual(1);
  });

  test("Max is correct", () => {
    const result = analyzeArray([1, 2, 3, 4]);
    expect(result.max).toEqual(4);
  });

  test("Length is correct", () => {
    const result = analyzeArray([1, 2, 3, 4]);
    expect(result.length).toEqual(4);
  });
});
