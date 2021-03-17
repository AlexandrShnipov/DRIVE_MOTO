import s from './Sidebar.module.scss';
import SidebarItem from './sidebarItem/SidebarItem';
import RadioInput from './radioInput/RadioInput';
import CheckboxInput from './checkboxInput/CheckboxInput';


const Sidebar = () => {
  return (
    <div className={s.sidebar}>

      <div className={s.sidebarLinks}>
        <a className={s.sidebarLink} href="#">параметры</a>
        <a className={s.sidebarLink} href="#">по марке</a>
      </div>

      <div className={s.parameters}>

        {/* Existence */}

        <SidebarItem title='Наличие'>
          <form className={s.existenceList}>
            <RadioInput
              value={'inStock'}
              name={'existence1'}
              text={'В наличие'}
            />

            <RadioInput
              value={'order'}
              name={'existence2'}
              text={'Под заказ'}
            />
          </form>
        </SidebarItem>

        {/* Novelty */}

        <SidebarItem title='Новинки'>
          <form className={s.existenceList}>
            <RadioInput
              value={'all'}
              name={'novelty1'}
              text={'Все'}
                     />

            <RadioInput
              value={'novelty'}
              name={'novelty2'}
              text={'Новинки'}
            />

            <RadioInput
              value={'stock'}
              name={'novelty3'}
              text={'Акции'}
            />
          </form>
        </SidebarItem>

        {/* Price */}

        <SidebarItem title='Цена'>
          {/* <form className='priceList parametrList'>
    //       <input type='range' multiple min='1000' max='5000000' step='any'></input>
        
    //       <p className='selectionItem'> от <span className='selectionFrom'>100 000</span></p>
          
    //         <p className='selectionItem'>  до <span className='selectionBefore'>500 000</span></p>
         
    //     </form> */}
        </SidebarItem>

        {/* Power */}

        {/* <div className='power parametr'>
          <h3 className='powerTitle parametrTitle'>Мощность, л.с.</h3>

          <select className='powerBlock parametrBlock' name='power'>
            <option className='powerBlockItem' selected value="90">90</option>
            <option className='powerBlockItem parametrItem' value="130">130</option>
            <option className='powerBlockItem parametrItem' value="154">154</option>
            <option className='powerBlockItem parametrItem' value="230">230</option>
            <option className='powerBlockItem parametrItem' value="300">300</option>
          </select>
        </div> */}

        {/* EnginePower */}

        {/* <div className='enginePower parametr'>
          <h3 className='enginePowerTitle parametrTitle'>Мощность двигателя, л.с.</h3>
          <select className='enginePowerBlock parametrBlock' name='power'>
            <option className='enginePowerItem parametrItem' selected value="90">90</option>
            <option className='enginePowerItem parametrItem' value="130">130</option>
            <option className='enginePowerItem parametrItem' value="154">154</option>
            <option className='enginePowerItem parametrItem' value="230">230</option>
            <option className='enginePowerItem parametrItem' value="300">300</option>
          </select>
        </div> */}

        {/* Speed */}

        {/* <div className='speed parametr'>
          <h3 className='speedTitle parametrTitle'>Макс. скорость</h3>
          <select className='speedBlock parametrBlock' name='speed'>
            <option className='speedItem parametrItem' selected value="90">90</option>
            <option className='speedItem parametrItem' value="130">130</option>
            <option className='speedItem parametrItem' value="154">154</option>
            <option className='speedItem parametrItem' value="230">230</option>
            <option className='speedItem parametrItem' value="300">300</option>
          </select>
        </div> */}

        {/* Brand */}

        <SidebarItem title='Бренд'>
          <form className={s.brandList} action="#">
            <CheckboxInput
              value={'BRP'}
              name={'brand1'}
              text={'BRP'} />

            <CheckboxInput
              value={'Spark 2'}
              name={'brand2'}
              text={'Spark 2'} />

            <CheckboxInput
              value={'Spark 3'}
              name={'brand3'}
              text={'Spark 3'} />

            <button type='button'>Показать еще</button>
          </form>
        </SidebarItem>

        {/* Model */}

        <SidebarItem title='Модель'>

          <form action="" method='get'>
            <input type="text" placeholder='Введите модель ' />
          </form>

          <form action='' method='get'>
            <CheckboxInput
              value={'Sea-doo Spark 2'}
              name={'model1'}
              text={'Sea-doo Spark 2'} />

            <CheckboxInput
              value={'SeaDoo Spark 90'}
              name={'model2'}
              text={'SeaDoo Spark 90'} />

            <CheckboxInput
              value={'SeaDoo GTI 155'}
              name={'model3'}
              text={'SeaDoo GTI 155'} />

            <CheckboxInput
              value={'SeaDoo GTR 230'}
              name={'model4'}
              text={'SeaDoo GTR 230'} />
          </form>

          <button type='submit'>Показать еще</button>

        </SidebarItem>

        {/* Promotions */}

        <SidebarItem title='Акции'>
          <div className={s.promotionsBtnBlock}>
            <button className={s.promotionsBtn}>SALE</button>
            <button className={s.promotionsBtn}>NEW</button>
            <button className={s.promotionsBtn}>HIT</button>
            <button className={s.promotionsBtn}>ДИЛЕР</button>

          </div>
        </SidebarItem>

        {/* Country */}

        <SidebarItem title='Страны'>
          <checkboxInput
            value={'Russia'}
            name={'country1'}
            text={'Россия'}
          />

          <checkboxInput
            value={'Germany'}
            name={'country2'}
            text={'Германия'}
          />

          <checkboxInput
            value={'China'}
            name={'country3'}
            text={'Китай'}
          />

          <checkboxInput
            value={'USA'}
            name={'country4'}
            text={'CША'}
          />

          <button type='button'>Показать еще</button>
        </SidebarItem>


        <div className={s.ButtonsFooter}>
          <button className={`${s.btnSelect} ${s.btnFooter}`} type='submit'>
            <span className={s.btnSelectText}> ВЫБРАТЬ</span>
          </button>

          <button className={`${s.btnMore} ${s.btnFooter}`}
            type='button'>
            <span className={s.btnMoreText}>Дополнительные параметры</span>
          </button>

          <button className=
            {`${s.btnReset} ${s.btnFooter}`}
            type='reset'>
            <span className={s.btnResetText}>Сбросить фильтр</span>
          </button>
        </div>

      </div>
    </div>
  )
}


export default Sidebar