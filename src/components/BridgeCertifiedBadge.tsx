import { Icon } from "./Icon";

type BridgeCertifiedBadgeProps = {
  size?: "sm" | "md";
  className?: string;
};

export function BridgeCertifiedBadge({
  size = "md",
  className = "",
}: BridgeCertifiedBadgeProps) {
  const isSmall = size === "sm";
  return (
    <div className={`certification-shimmer flex items-center gap-1 rounded-full px-3 py-1 shadow-sm ${className}`}>
      <Icon
        name="verified"
        filled
        className={isSmall ? "text-sm text-white" : "text-base text-white"}
      />
      <span
        className={`font-semibold uppercase tracking-wider text-white ${
          isSmall ? "text-[10px]" : "text-xs"
        }`}
      >
        Bridge Certified
      </span>
    </div>
  );
}

