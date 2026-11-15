import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default function Section({ title, titleAlign = 'left', link, children }: { title: string; titleAlign?: 'left' | 'center'; link?: { text: string; href: string }; children: ReactNode }) {
  return (
    <section className="section">
      <div className={`section__head section__head--${titleAlign}`}>
        <h2>{title}</h2>
        {link && <Link to={link.href} className="section__link">{link.text}</Link>}
      </div>
      {children}
    </section>
  );
}
