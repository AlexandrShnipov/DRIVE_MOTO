import './Promotions'

const Promotions = () => {
  return (
    <div className='promotions parametr'>

      <details className='promotionsBlock parametrBlock'>
        <summary className='promotionsTitle parametrTitle'>
          Акции
                  </summary>

        <div className='promotionsBtn Btn'>
          <button>SALE</button>
          <button>NEW</button>
          <button>HIT</button>
          <button>ДИЛЕР</button>

        </div>
      </details>
    </div>
  )
}

export default Promotions
