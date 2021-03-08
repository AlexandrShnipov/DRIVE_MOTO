
import './Button.css';

function Button({className1, name}) {
  return (
    <button className={className1}>{name}</button>
  );
}

export default Button;
