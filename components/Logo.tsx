import Image from 'next/image';

const ASSETS = {
  full: { src: '/brand/logo-white.png', width: 1788, height: 1788 },
  mascot: { src: '/brand/mascot-white.png', width: 1644, height: 788 },
};

type LogoProps = {
  /** "full" is the wordmark + mascot lockup — never below ~120px wide, per the brand kit's
   * minimum-size rule. "mascot" is the mascot-only crop, cleared for compact use (nav, avatars). */
  variant?: 'full' | 'mascot';
  height: number;
  className?: string;
  priority?: boolean;
};

export default function Logo({ variant = 'full', height, className, priority }: LogoProps) {
  const asset = ASSETS[variant];
  const width = Math.round((asset.width / asset.height) * height);
  return (
    <Image
      src={asset.src}
      alt="Channel Mark Shell LLC"
      width={width}
      height={height}
      className={className}
      priority={priority}
      style={{ width, height, objectFit: 'contain' }}
    />
  );
}
