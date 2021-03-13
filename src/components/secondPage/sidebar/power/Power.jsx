import './Power.css'

const Power = () => {
  return (
    <div className='power parametr'>
      <h3 className='powerTitle parametrTitle'>Мощность, л.с.</h3>
      
      <select className='powerBlock parametrBlock' name='power'>
        <option className='powerBlockItem' selected value="90">90</option>
        <option className='powerBlockItem parametrItem' value="130">130</option>
        <option className='powerBlockItem parametrItem' value="154">154</option>
        <option className='powerBlockItem parametrItem' value="230">230</option>
        <option className='powerBlockItem parametrItem' value="300">300</option>
      </select>
</div>
  )
}

export default Power