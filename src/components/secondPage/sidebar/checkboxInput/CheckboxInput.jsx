import s from './CheckboxInput.module.scss';

const CheckboxInput = (props) => {
  return (
    <>
      <input className='checkboxInput' id={props.value} type="checkbox" name={props.name} value={props.value} />
      <label htmlFor={props.value}>{props.text}</label>
    </>
  )
}

export default CheckboxInput