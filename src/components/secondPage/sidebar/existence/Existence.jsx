import './Existence.css';

const Existence = () => {
  return (
    <div className='existence parametr'>
      <details className='existenceBlock parametrBlock'>
        <summary className='existenceTitle parametrTitle'>
          Наличие
          </summary>
        <form className='existenceList parametrList'>
          <input id='inStock' type="checkbox" name="ExistenceList1" value='inStock' />
          <label htmlFor="inStock">В наличие</label>

          <input id='order' type="checkbox" name="ExistenceList2" value='order' />
          <label htmlFor="order">Под заказ</label>
        </form>
      </details>
    </div>
  )
}


export default Existence