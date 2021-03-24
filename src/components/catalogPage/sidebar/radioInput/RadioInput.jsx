import s from './RadioInput.module.scss';

const RadioInput = (props) => {
  return (
    <label className={s.radioInputText}>
      <input className={s.radioInput} type="radio" name={props.name} value={props.value} checked={props.checked}/>
      <span className={s.radioStyle}></span>
      {props.text}
    </label>
  )
}


export default RadioInput