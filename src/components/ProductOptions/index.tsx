import { useState } from 'react';
import type { CSSProperties } from 'react';
import './styles.css';

interface Props {
  options?: string[];
  radius?: string;
  shape?: 'square' | 'circle';
  type?: 'text' | 'color';
  defaultSelected?: string;
}

export default function ProductOptions({ options = [], radius = '4px', shape = 'square', type = 'text', defaultSelected }: Props) {
  const [selected, setSelected] = useState<string | null>(defaultSelected ?? null);
  const isColor = type === 'color';

  return (
    <div className="options">
      {options.map((opt) => {
        const style: CSSProperties = {
          borderRadius: shape === 'circle' ? '50%' : radius,
          background: isColor ? opt : undefined,
        };
        return (
          <button
            key={opt}
            type="button"
            className={`options__item options__item--${type} ${selected === opt ? 'is-selected' : ''}`}
            style={style}
            onClick={() => setSelected(opt)}
            aria-label={`Opção ${opt}`}
            aria-pressed={selected === opt}
          >
            {!isColor && opt}
          </button>
        );
      })}
    </div>
  );
}
