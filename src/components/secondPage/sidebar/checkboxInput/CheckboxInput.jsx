import s from './CheckboxInput.module.scss';

const CheckboxInput = (props) => {
  return (
    <label>
      <input className='checkboxInput' type="checkbox" name={props.name} value={props.value} />
      <span>{props.text}</span>
    </label>
  )
}

export default CheckboxInput