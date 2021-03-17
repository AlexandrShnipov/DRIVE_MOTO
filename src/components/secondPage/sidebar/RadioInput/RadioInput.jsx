import s from './RadioInput.module.scss';

const RadioInput = (props) => {
  return (
    <label>
      <input className={s.radioInput} type="radio" name={props.name} value={props.value} />
    
      <span className={s.radioStyle}></span>
      <span className={s.radioInputText}>{props.text}</span>
         
    </label>
  )
}


export default RadioInput