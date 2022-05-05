import cloneArray from "../../src/array";

const arrayTests = () => {
  let array = [1, 2, 3];
  it("Should return a copy of the array", () => {
    expect(cloneArray(array)).toEqual([1, 2, 3]);
  });
};

export default arrayTests;
