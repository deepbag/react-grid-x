/**
 * Props interface for the Loader component.
 * This interface defines the expected properties for customizing the loader message.
 */
export interface RGXLoaderProps {
  /**
   * A custom message to display while the loader is active.
   * If not provided, a default message of "Loading, please wait..." will be shown.
   * This allows flexibility for the component to indicate different loading states.
   *
   * @example "Fetching data..."
   */
  message?: string; // Optional custom message

  /**
   * An optional style object to customize the CSS styling for loader.
   * This allows users to apply custom styles for loader.
   */
  style?: Record<string, React.CSSProperties>;
}
