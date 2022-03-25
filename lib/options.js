/**
 * define all valid options
 */

export default [
  /**
   * a list of button titles (required)
   * @type string[]
   * @example
   *   ['cancel', 'Apple', 'Banana']
   */
  "options",

  /**
   * index of cancel button in options
   * @type int
   */
  "cancelButtonIndex",

  /**
   * the color used for the change the text color of the cancel button
   * @type string
   */
  "cancelButtonTintColor",

  /**
   * index of destructive button in options
   * @type int
   */
  "destructiveButtonIndex",

  /**
   * a title to show above the action sheet
   * @type string
   */
  "title",

  /**
   * a message to show below the title
   * @type string
   */
  "message",

  /**
   * the node to which the action sheet should be anchored (used for iPad)
   * @type number
   */
  "anchor",

  /**
   * the color used for non-destructive button titles
   * @type string
   * @see http://facebook.github.io/react-native/docs/colors.html
   */
  "tintColor",

  /**
   * a list of button indices which should be disabled
   * @type array of numbers
   */
  "disabledButtonIndices",

  /**
   * the interface style used for the action sheet, can be set to light or dark, otherwise the default system style will be used
   * @type string
   */
  "userInterfaceStyle",

  /**
   * The 'callback' function takes one parameter, the zero-based index of the selected item
   * @type (buttonIndex) => void
   * @example
   *   (buttonIndex) => if (buttonIndex === 1) { // do something }
   */
  "onPress",
];
