import './styles.css';

export default function FilterGroup({ title, inputType = 'checkbox', options = [], name }: { title: string; inputType?: 'checkbox' | 'radio'; options?: { text: string; value?: string }[]; name?: string }) {
  const group = name || title;
  return (
    <fieldset className="filter">
      <legend>{title}</legend>
      {options.map((opt) => (
        <label key={opt.text}>
          <input type={inputType} name={group} value={opt.value ?? opt.text} />
          {opt.text}
        </label>
      ))}
    </fieldset>
  );
}
