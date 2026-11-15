import type { ReactNode } from 'react';
import './styles.css';

interface Props {
  title: string;
  subtitle?: string;
  children: ReactNode;
  footer?: ReactNode;
}

export default function AuthCard({ title, subtitle, children, footer }: Props) {
  return (
    <section className="auth">
      <div className="auth__card">
        <h1>{title}</h1>
        {subtitle && <p className="auth__subtitle">{subtitle}</p>}
        {children}
        {footer && <p className="auth__footer">{footer}</p>}
      </div>
    </section>
  );
}
