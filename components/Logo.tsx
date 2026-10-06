const ASSETS = {
  full: { src: '/brand/logo-mark.svg', width: 3520, height: 3520 },
  mascot: { src: '/brand/logo-mascot.svg', width: 2973, height: 1254 },
};

type LogoProps = {
  /** "full" is the wordmark + mascot lockup — never below ~120px wide, per the brand kit's
   * minimum-size rule. "mascot" is the mascot-only crop, cleared for compact use (nav, avatars). */
  variant?: 'full' | 'mascot';
  height: number;
  className?: string;
  priority?: boolean;
};

/**
 * Source art is black-ink-on-transparent (a vector trace of the real logo).
 * The site only ever shows the logo on dark backgrounds, so it's knocked out
 * to white via a CSS invert — the art is pure grayscale, so invert(1) maps
 * black -> white cleanly without touching any hue.
 */
export default function Logo({ variant = 'full', height, className, priority }: LogoProps) {
  const asset = ASSETS[variant];
  const width = Math.round((asset.width / asset.height) * height);
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={asset.src}
      alt="Channel Mark Shell LLC"
      width={width}
      height={height}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      style={{ width, height, objectFit: 'contain', filter: 'invert(1)' }}
    />
  );
}
