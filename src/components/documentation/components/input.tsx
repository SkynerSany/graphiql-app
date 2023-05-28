import { useEffect, useRef } from 'react';
import { IInputProps } from '../documentation.interfaces';

export default function Input({ updateField, fieldName, checked }: IInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current!.checked = checked;
  }, [checked]);

  return (
    <input
      ref={inputRef}
      onChange={(e) => updateField(e, fieldName)}
      type="checkbox"
      name={fieldName}
      id=""
    />
  );
}
