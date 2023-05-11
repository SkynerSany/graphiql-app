import './myButton.scss';

function MyButton({ content, className }: Props) {
  return <button className={className}>{content}</button>;
}

export default MyButton;
