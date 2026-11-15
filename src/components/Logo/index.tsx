import logoHeader from '../../assets/logo-header.svg';
import logoFooter from '../../assets/logo-footer.svg';

export default function Logo({ variant = 'header' }: { variant?: 'header' | 'footer' }) {
  const src = variant === 'footer' ? logoFooter : logoHeader;
  return <img src={src} alt="Digital Store" width={253} height={44} />;
}
