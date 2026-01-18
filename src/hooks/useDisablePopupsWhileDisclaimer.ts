/**
 * Hook helper to check if popups/modals should be disabled
 * Returns true if the disclaimer modal is open (popup should NOT show)
 * Returns false if disclaimer is accepted (popup CAN show)
 */
export function useDisablePopupsWhileDisclaimer() {
  // This is a simple helper that can be used like:
  // const shouldDisablePopups = useDisablePopupsWhileDisclaimer();
  // if (shouldDisablePopups) return null;
  
  // In components that use useDisclaimer:
  // import { useDisclaimer } from "@/contexts/DisclaimerContext";
  // const { isDisclaimerOpen, isDisclaimerAccepted } = useDisclaimer();
  // if (isDisclaimerOpen) return null; // Don't show popup
  
  return null;
}

/**
 * Usage in your popup components:
 * 
 * "use client";
 * import { useDisclaimer } from "@/contexts/DisclaimerContext";
 * 
 * export default function MyPopup() {
 *   const { isDisclaimerOpen } = useDisclaimer();
 * 
 *   // Don't show popup while disclaimer is displayed
 *   if (isDisclaimerOpen) {
 *     return null;
 *   }
 * 
 *   return (
 *     // Your popup JSX
 *   );
 * }
 */
