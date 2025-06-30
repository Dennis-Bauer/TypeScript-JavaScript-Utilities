/**
 *  <h2>Utilities for TypeScript-JavaScript</h2>
 *  <p>
 *  These utilities are intended to simplify programming with TypeScript(JavaScript)
 *  and keep the code clean. In this specific version the method to write
 *  to the console is updated. You can choose your console text color and
 *  text style to make the beauty of your console text fuller than ever.
 *  <p>
 *  <h3>Infos for this specific version:</h3>
 *  <p>
 *  Nop, you don't have to know anything to use this.
 *  <p>
 * @author bauer
 * @version 1.0
 * @since 30.06.2025
 */
const RESET = "\x1b[0m"; // Text Reset

export type colors = //Color Values
  "BLACK" | "RED" | "GREEN" | "YELLOW" | "BLUE" | "PURPLE" | "CYAN" | "WHITE";

export type textStyle = //Style Values
  | "REGULAR"
  | "BOLD"
  | "UNDERLINE"
  | "BACKGROUND"
  | "HIGH_INTENSITY"
  | "BOLD_HIGH_INTENSITY"
  | "HIGH_INTENSITY_BACKGROUNDS";

/**
   * This function outputs modified text to the console
   * @param color This input sets the Color of the text.
   * @param style This input sets the Style of the text.
   * @param text This is the text that will be output.
   */
export function consoleLog(color: colors, style: textStyle, text: string) {
  console.log(createColorText(color, style, true, text));
}

/**
 * This function creates colored and styled text based on the given parameters.
 * @param color Sets the color of the text.
 * @param style Sets the style of the text.
 * @param resetTextAtEnd If set to true, resets any styling for text placed after the string.
 * @param text The text to be output.
 */
export function createColorText(
  color: colors,
  style: textStyle,
  resetTextAtEnd: boolean,
  text: string
) {
  return `${getTextCode(color, style)}${text}${resetTextAtEnd ? RESET : ""}`;
}

/**
 * This function generates the text code that sets the color and style.
 * @param color This input says what color the text code should contain.
 * @param style This input says what style the text code should contain.
 * @return Returns the text code.
 */
const getTextCode = function (color: colors, style: textStyle): string {
  let colorCode = "\x1b[";
  switch (style) {
    case "BOLD":
    case "UNDERLINE":
    case "REGULAR": {
      switch (style) {
        case "REGULAR":
          colorCode = colorCode + "0;";
          break;
        case "BOLD":
          colorCode = colorCode + "1;";
          break;
        case "UNDERLINE":
          colorCode = colorCode + "4;";
          break;
      }

      switch (color) {
        case "BLACK":
          colorCode = colorCode + "30m";
          break;
        case "RED":
          colorCode = colorCode + "31m";
          break;
        case "GREEN":
          colorCode = colorCode + "32m";
          break;
        case "YELLOW":
          colorCode = colorCode + "33m";
          break;
        case "BLUE":
          colorCode = colorCode + "34m";
          break;
        case "PURPLE":
          colorCode = colorCode + "35m";
          break;
        case "CYAN":
          colorCode = colorCode + "36m";
          break;
        case "WHITE":
          colorCode = colorCode + "37m";
          break;
      }
      break;
    }
    case "BACKGROUND": {
      switch (color) {
        case "BLACK":
          colorCode = colorCode + "40m";
          break;
        case "RED":
          colorCode = colorCode + "41m";
          break;
        case "GREEN":
          colorCode = colorCode + "42m";
          break;
        case "YELLOW":
          colorCode = colorCode + "43m";
          break;
        case "BLUE":
          colorCode = colorCode + "44m";
          break;
        case "PURPLE":
          colorCode = colorCode + "45m";
          break;
        case "CYAN":
          colorCode = colorCode + "46m";
          break;
        case "WHITE":
          colorCode = colorCode + "47m";
          break;
      }
      break;
    }
    case "HIGH_INTENSITY":
    case "BOLD_HIGH_INTENSITY": {
      switch (style) {
        case "HIGH_INTENSITY":
          colorCode = colorCode + "0;";
          break;
        case "BOLD_HIGH_INTENSITY":
          colorCode = colorCode + "1;";
          break;
      }
      switch (color) {
        case "BLACK":
          colorCode = colorCode + "90m";
          break;
        case "RED":
          colorCode = colorCode + "91m";
          break;
        case "GREEN":
          colorCode = colorCode + "92m";
          break;
        case "YELLOW":
          colorCode = colorCode + "93m";
          break;
        case "BLUE":
          colorCode = colorCode + "94m";
          break;
        case "PURPLE":
          colorCode = colorCode + "95m";
          break;
        case "CYAN":
          colorCode = colorCode + "96m";
          break;
        case "WHITE":
          colorCode = colorCode + "97m";
          break;
      }
      break;
    }
    case "HIGH_INTENSITY_BACKGROUNDS": {
      switch (color) {
        case "BLACK":
          colorCode = colorCode + "0;100m";
          break;
        case "RED":
          colorCode = colorCode + "0;101m";
          break;
        case "GREEN":
          colorCode = colorCode + "0;102m";
          break;
        case "YELLOW":
          colorCode = colorCode + "0;103m";
          break;
        case "BLUE":
          colorCode = colorCode + "0;104m";
          break;
        case "PURPLE":
          colorCode = colorCode + "0;105m";
          break;
        case "CYAN":
          colorCode = colorCode + "0;106m";
          break;
        case "WHITE":
          colorCode = colorCode + "0;107m";
          break;
      }
      break;
    }
    default:
      console.log("Error, cannot print this style!");
  }
  return colorCode;
};
