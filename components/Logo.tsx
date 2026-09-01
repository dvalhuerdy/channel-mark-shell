type LogoMarkProps = {
  size?: number;
  className?: string;
};

/**
 * The daymark: an abstract navigation marker on a piling above a waterline.
 * Flat shapes only — no gradients, bevels, or shadows, per brand spec.
 */
export function LogoMark({ size = 40, className }: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="45" y="38" width="10" height="40" fill="#F7F5F1" />
      <path d="M50 6 L78 34 L50 62 L22 34 Z" fill="#D33F32" />
      <path
        d="M8 84 Q20 76 32 84 T56 84 T80 84 T104 84"
        stroke="#F7F5F1"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M8 94 Q20 88 32 94 T56 94 T80 94 T104 94"
        stroke="#8B9096"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
    </svg>
  );
}

type LogoProps = {
  variant?: 'stacked' | 'horizontal';
  markSize?: number;
  className?: string;
};

export default function Logo({ variant = 'horizontal', markSize = 40, className }: LogoProps) {
  return (
    <span className={`logo-lockup logo-${variant} ${className ?? ''}`}>
      <LogoMark size={markSize} />
      <span className="logo-text">
        <span className="logo-name">Channel Mark</span>
        <span className="logo-sub">Shell</span>
      </span>
    </span>
  );
}
