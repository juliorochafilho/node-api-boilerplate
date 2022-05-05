import sum from "../../src/sum";

const sumTests = () => {
  it("Should return the sum of two numbers", () => {
    expect(sum(1, 2)).toEqual(3);
  });
  it("Should return the sum a positive and negative number", () => {
    expect(sum(1, -2)).toEqual(-1);
  });
};

export default sumTests;
