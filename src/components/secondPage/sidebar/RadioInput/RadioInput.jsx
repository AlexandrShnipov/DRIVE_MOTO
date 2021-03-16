import s from './RadioInput.module.scss';

const RadioInput = (props) => {
  return (
    <>
      <input className={s.radioInput} id={props.value} type="radio" name={props.name} value={props.value}/>
      <label className={s.radioInputText} htmlFor={props.value}>{props.text }</label>
    </>
  )
}


export default RadioInput