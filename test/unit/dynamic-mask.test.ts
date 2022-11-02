import { maskIt } from "../../src/mask-it";
import { tokens } from "../../src/tokens";
import { dynamicMask } from "./../../src/dynamic-mask";

describe("Dynamic Mask Tests", () => {
  it("empty", () => {
    const masks: string[] = [];
    const mask = dynamicMask(maskIt, masks, tokens);
    expect(mask("12345")).toBe("");
  });

  it("single", () => {
    const masks: string[] = ["#.#"];
    const mask = dynamicMask(maskIt, masks, tokens);
    expect(mask("12")).toBe("1.2");
    expect(mask("321")).toBe("3.2");
  });

  it("CEP USA/BR", () => {
    const masks: string[] = ["#####", "#####-###"];
    const mask = dynamicMask(maskIt, masks, tokens);
    expect(mask("12345")).toBe("12345");
    expect(mask("123456")).toBe("12345-6");
    expect(mask("12345678")).toBe("12345-678");
  });

  it("Reverse CEP USA/BR", () => {
    const masks: string[] = ["#####-###", "#####"];
    const mask = dynamicMask(maskIt, masks, tokens);
    expect(mask("12345")).toBe("12345");
    expect(mask("123456")).toBe("12345-6");
    expect(mask("12345678")).toBe("12345-678");
  });

  it("cpf/cnpj", () => {
    const masks: string[] = ["###.###.###-##", "##.###.###/####-##"];
    const mask = dynamicMask(maskIt, masks, tokens);
    expect(mask("12345678901")).toBe("123.456.789-01");
    expect(mask("123456789012")).toBe("12.345.678/9012");
  });

  it("bank agency", () => {
    const masks: string[] = ["####", "####-#", "####-##"];
    const mask = dynamicMask(maskIt, masks, tokens);
    expect(mask("1234")).toBe("1234");
    expect(mask("12345")).toBe("1234-5");
    expect(mask("123456")).toBe("1234-56");
  });

  it("bank account", () => {
    const masks: string[] = [
      "#####-#",
      "######-#",
      "#######-#",
      "########-#",
      "#########-#",
    ];
    const mask = dynamicMask(maskIt, masks, tokens);
    expect(mask("123456")).toBe("12345-6");
    expect(mask("1234567")).toBe("123456-7");
    expect(mask("12345678")).toBe("1234567-8");
    expect(mask("123456789")).toBe("12345678-9");
    expect(mask("1234567890")).toBe("123456789-0");
  });
});
