import { useState } from 'react';
import type { ChangeEvent } from 'react';
import './styles.css';

interface Props {
  id: string;
  label: string;
  type?: 'text' | 'email' | 'password';
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  placeholder?: string;
  autoComplete?: string;
}

export default function FormField({ id, label, type = 'text', value, onChange, error, placeholder, autoComplete }: Props) {
  const [visible, setVisible] = useState(false);
  const isPassword = type === 'password';

  return (
    <div className={`field ${error ? 'field--error' : ''}`}>
      <label htmlFor={id}>{label}</label>
      <div className="field__box">
        <input
          id={id}
          type={isPassword && visible ? 'text' : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
        />
        {isPassword && (
          <button type="button" onClick={() => setVisible(!visible)}>{visible ? 'Ocultar' : 'Mostrar'}</button>
        )}
      </div>
      {error && <p id={`${id}-error`} role="alert" className="field__error">{error}</p>}
    </div>
  );
}
