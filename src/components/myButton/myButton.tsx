import { Props } from './myButton.interfaces';
import './myButton.scss';

function MyButton({ content, className, event, type }: Props) {
  return (
    <button className={className} onClick={event} type={type}>
      {content}
    </button>
  );
}

export default MyButton;
