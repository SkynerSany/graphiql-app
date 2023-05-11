import { Props } from './myButton.interfaces';
import './myButton.scss';

function MyButton({ content, className, event }: Props) {
  return (
    <button className={className} onClick={event}>
      {content}
    </button>
  );
}

export default MyButton;
