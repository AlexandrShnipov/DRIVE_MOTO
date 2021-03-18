import s from './CheckboxInput.module.scss';

const CheckboxInput = (props) => {
  return (
    <label className={s.checkboxText}>
      <input className={s.checkboxInput} type="checkbox" name={props.name} value={props.value} />
      <span className={s.checkStyle}></span>
      {props.text}
    </label>
  )
}

export default CheckboxInput