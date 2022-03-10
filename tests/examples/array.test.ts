import cloneArray from "../../src/array";

test("Properly cloning array", () => {
  let array = [1, 2, 3];
  expect(cloneArray(array)).toEqual([1, 2, 3]);
});
