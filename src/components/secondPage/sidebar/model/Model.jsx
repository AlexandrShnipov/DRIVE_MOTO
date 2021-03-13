import './Model.css'

const Model = () => {
  return (
    <div className='model parametr'>

      <details className='modelBlock parametrBlock'>

        <summary className='modelTitle parametrTitle'>
          Модель
        </summary>

        <form action="" method='get'>
          <input type="text" placeholder='Введите модель ' />
        </form>

        <form className='modelList parametrList'>
          <input id='Sea-doo Spark 2' type="checkbox" checked    name="modelList1" value='BRP' />
          <label htmlFor="Sea-doo Spark 2">Sea-doo Spark 2</label>

          <input id='SeaDoo Spark 90 ' type="checkbox" checked name="modelList2" value='SeaDoo Spark 90' />
          <label htmlFor="SeaDoo Spark 90 "> SeaDoo Spark 90 </label>

          <input id='SeaDoo GTI 155' type="checkbox" name="modelList3" value='SeaDoo GTI 155' />
          <label htmlFor="SeaDoo GTI 155">SeaDoo GTI 155</label>

          <input id='SeaDoo GTR 230' type="checkbox" name="modelList4" value='SeaDoo GTR 230' />
          <label htmlFor="SeaDoo GTR 230">SeaDoo GTR 230 </label>
        </form>

<a href="#">Показать еще</a>
        
      </details>
      
    </div >
  )
}

export default Model