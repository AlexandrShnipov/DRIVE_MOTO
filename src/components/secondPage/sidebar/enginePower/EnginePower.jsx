import './EnginePower.css';

const EnginePower = () => {
  return (
    <div className='enginePower parametr'>
      <h3 className='enginePowerTitle parametrTitle'>Мощность двигателя, л.с.</h3>
      <select className='enginePowerBlock parametrBlock' name='power'>
        <option className='enginePowerItem parametrItem' selected value="90">90</option>
        <option className='enginePowerItem parametrItem' value="130">130</option>
        <option className='enginePowerItem parametrItem' value="154">154</option>
        <option className='enginePowerItem parametrItem' value="230">230</option>
        <option className='enginePowerItem parametrItem' value="300">300</option>
      </select>
</div>
  )
}

export default EnginePower