import s from './Button.module.scss';

const Button = ({className, children}) => {
  return (
    <button className={s[className]}>{children}</button>
  );
}

export default Button;