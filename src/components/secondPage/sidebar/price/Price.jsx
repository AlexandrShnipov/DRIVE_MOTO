import './Price.css';

const Price = () => {
  return (
    <div className='price parametr'>
      <details className='priceBlock parametrBlock'>
        <summary className='priceTitle parametrTitle'>
          Цена
        </summary>
        <form className='priceList parametrList'>
          <input type='range' multiple min='1000' max='5000000' step='any'></input>
        
          <p className='selectionItem'> от <span className='selectionFrom'>100 000</span></p>
          
            <p className='selectionItem'>  до <span className='selectionBefore'>500 000</span></p>
         
        </form>
      </details>
    </div>
  )
}



export default Price