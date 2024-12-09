import { createPortal } from "react-dom";

export default function Backdrop({
  isAnimating,
  onClick,
  children,
}: {
  isAnimating: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  const backdropContent = (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 ${
        isAnimating ? "animate-fadeOut" : "animate-fadeIn"
      }`}
      onClick={onClick}
    >
      {children}
    </div>
  );

  return createPortal(backdropContent, document.getElementById("popups")!);
}
