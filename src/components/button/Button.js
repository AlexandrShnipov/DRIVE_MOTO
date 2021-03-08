
import './Button.css';

function Button({className1, name}) {

  
  // console.log(lena);

  return (
    <button className={className1}>{name}</button>
  );
}

export default Button;
