import './Speed.css'

const Speed = () => {
  return (
    <div className='speed parametr'>
      <h3 className='speedTitle parametrTitle'>Макс. скорость</h3>
      <select className='speedBlock parametrBlock' name='speed'>
        <option className='speedItem parametrItem' selected value="90">90</option>
        <option className='speedItem parametrItem' value="130">130</option>
        <option className='speedItem parametrItem' value="154">154</option>
        <option className='speedItem parametrItem' value="230">230</option>
        <option className='speedItem parametrItem' value="300">300</option>
      </select>
</div>
  )
}

export default Speed