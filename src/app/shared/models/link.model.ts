/**
 * Link to use in the navigations.
 */
export interface Link {
  id?: string;
  displayName: string;
  url?: string;
  icon?: string;
  /**
   * Color for the text and the icon.
   */
  color?: string;
  /**
   * Overrides the color property.
   */
  textColor?: string;
  /**
   * Overrides the color property.
   */
  iconColor?: string;
}
