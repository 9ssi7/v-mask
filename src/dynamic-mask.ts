import type { MaskItType } from "./mask-it";
import type { TokenType } from "./tokens";

type DynamicMaskResult = (value: string, masked?: boolean) => string;

export const dynamicMask = (
  maskIt: MaskItType,
  masks: string[],
  tokens: Record<string, TokenType>
): DynamicMaskResult => {
  masks = masks.sort((a, b) => a.length - b.length);
  return function (value: string, masked = true) {
    let i = 0;
    while (i < masks.length) {
      const currentMask = masks[i];
      i++;
      const nextMask = masks[i];
      if (
        !(
          nextMask &&
          maskIt(value, nextMask, tokens, true).length > currentMask.length
        )
      ) {
        return maskIt(value, currentMask, tokens, masked);
      }
    }
    return "";
  };
};
