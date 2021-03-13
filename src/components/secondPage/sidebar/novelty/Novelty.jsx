import './Novelty.css';

const Novelty = () => {
  return (
    <div className='novelty parametr'>
      <details className='noveltyBlock parametrBlock'>
        <summary className='noveltyTitle parametrTitle'>
          Новинки
        </summary>
        <form className='noveltyList parametrList'>
          <input id='all' type="checkbox" checked name="ExistenceList1" value='all' />
          <label htmlFor="all">Все</label>

          <input id='novelty' type="checkbox" name="ExistenceList2" value='order' />
          <label htmlFor="novelty"> Новинки</label>

          <input id='stock' type="checkbox" name="ExistenceList3" value='stock' />
          <label htmlFor="stock">Акции</label>
        </form>
      </details>
    </div >
  )
}


export default Novelty