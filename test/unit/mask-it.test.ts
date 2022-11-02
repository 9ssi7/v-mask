import { tokens } from "../../src/tokens";
import { maskIt } from "../../src/mask-it";

describe("Mask It Tests", () => {
  it("12 #.#", () => {
    expect(maskIt("12", "#.#", tokens, true)).toBe("1.2");
  });
  it("1 (#)", () => {
    expect(maskIt("1", "(#)", tokens, true)).toBe("(1)");
  });

  it("1 [(#)]", () => {
    // two placeholder at the end
    expect(maskIt("1", "[(#)]", tokens, true)).toBe("[(1)]");
  });

  it("1 #.#", () => {
    expect(maskIt("1", "#.#", tokens, true)).toBe("1");
  });

  it("1. #.#", () => {
    expect(maskIt("1.", "#.#", tokens, true)).toBe("1.");
  });

  it("123 #.#", () => {
    expect(maskIt("123", "#.#", tokens, true)).toBe("1.2");
  });

  it("raw phone number", () => {
    expect(maskIt("44998765432", "+55 (##) #####-####", tokens, false)).toBe(
      "44998765432"
    );
  });

  it("abcd12345 AAA-####", () => {
    expect(maskIt("abcd12345", "AAA-####", tokens, true)).toBe("ABC-1234");
  });

  it("a5-12-34 => (XX) - ## - ##", () => {
    expect(maskIt("a5-12-34", "(XX) - ## - ##", tokens, true)).toBe(
      "(a5) - 12 - 34"
    );
  });

  it("123 ##(#)", () => {
    expect(maskIt("123", "##(#)", tokens, true)).toBe("12(3)");
  });

  it("123 #!#(#)", () => {
    expect(maskIt("12", "#!#(#)", tokens, true)).toBe("1#(2)");
  });

  it("12 +1 #", () => {
    expect(maskIt("12", "+1 #", tokens, true)).toBe("+1 2");
  });

  it("2 +1 #", () => {
    expect(maskIt("2", "+1 #", tokens, true)).toBe("+1 2");
  });
});
