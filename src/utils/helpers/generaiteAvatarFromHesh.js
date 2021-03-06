import { TinyColor } from "tinycolor";
import { fromRatio } from "@ctrl/tinycolor";

export default hesh => {
  const [r, g, b] = hesh
    .substring(0, 3)
    .split("")
    .map(char => (char.charCodeAt() >= 255 ? 255 : char.charCodeAt()));

  return {
    color: fromRatio({ r, g, b })
      .lighten(15)
      .saturate(10)
      .toHexString(),
    colorLightem: fromRatio({ r, g, b })
      .lighten(40)
      .saturate(20)
      .toHexString()
  };
};
