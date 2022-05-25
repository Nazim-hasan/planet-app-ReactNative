import { Colors } from "../../Theme/Colors";
import { Typography } from "../../Theme/Typography";

const BASE = {
  fontFamily: Typography.primary,
  fontSize: 16,
  color: Colors.white,
};
const BASE_BOLD = {
  fontFamily: Typography.primaryBold,
  fontSize: 16,
  color: Colors.white,
};
const BOLD = {
  fontFamily: Typography.bold,
  color: Colors.white,
};
export const presets = {
  default: BASE,
  bold: BOLD,
  h1: {
    ...BOLD,
    fontSize: 32,
  },
  h2: {
    ...BOLD,
    fontSize: 28,
  },
  h3: {
    ...BASE_BOLD,
    fontSize: 24,
  },
  h4: {
    ...BASE_BOLD,
    fontSize: 14,
  },
  small: {
    ...BASE,
    fontSize: 24,
  },
};
