import { Props } from './select.interfaces';
import { useForm } from 'react-hook-form';

import './select.scss';

function Select({ valueSelect, setLanguageSelectValue, options }: Props) {
  const { register } = useForm();

  return (
    <select
      {...register(valueSelect, {
        onChange: (e) => setLanguageSelectValue(e.target.value),
      })}
      className="form__input_select"
      data-testid="select"
      required={true}
    >
      {options &&
        options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
    </select>
  );
}

export default Select;
