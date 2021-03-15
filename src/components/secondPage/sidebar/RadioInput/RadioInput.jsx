import './RadioInput.css';

const RadioInput = (props) => {
  return (
    <>
      <input className='radioInput' id={props.value} type="radio" name={props.name} value={props.value}/>
      <label className='radioInputText' htmlFor={props.value}>{props.text }</label>
    </>
  )
}


export default RadioInput