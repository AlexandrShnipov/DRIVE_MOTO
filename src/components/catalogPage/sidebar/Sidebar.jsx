import s from './Sidebar.module.scss';
import SidebarItem from './sidebarItem/SidebarItem';
import RadioInput from './radioInput/RadioInput';
import CheckboxInput from './checkboxInput/CheckboxInput';
import DropDownLists from './dropDownLists/dropDownLists'
import ShowMore from './../../showMore/ShowMore'
import Price from './price/Price'



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
          <form className={s.radioList}>
            <div className={s.radioBlock}>
              <RadioInput
                value={'inStock'}
                name={'existence'}
                text={'В наличие'}
              />

              <RadioInput
                value={'order'}
                name={'existence'}
                text={'Под заказ'}
              />
            </div>
          </form>
        </SidebarItem>

        {/* Novelty */}

        <SidebarItem title='Новинки'>
          <form className={s.radioList}>
            <div className={s.radioBlock}>
              <RadioInput
                value={'all'}
                name={'novelty'}
                text={'Все'}
                checked={'checked'}
              />

              <RadioInput
                value={'novelty'}
                name={'novelty'}
                text={'Новинки'}
              />

              <RadioInput
                value={'stock'}
                name={'novelty'}
                text={'Акции'}
              />
            </div>
          </form>
        </SidebarItem>


        {/* Price */}

        <SidebarItem title='Цена'>

          <Price />

        </SidebarItem>

        {/*DropDownLists*/}

        <DropDownLists />

        {/* Brand */}

        <SidebarItem title='Бренд'>
          <form className={s.brandList} action="#">
            <div className={s.checkboxBlock}>
              <div className={s.checkboxBlock1}>
                <CheckboxInput
                  value={'BRP'}
                  name={'brand1'}
                  text={'BRP'}

                />

                <CheckboxInput
                  value={'Spark 3'}
                  name={'brand3'}
                  text={'Spark 3'}
                />
              </div>

              <div className={s.checkboxBlock2}>
                <CheckboxInput
                  value={'Spark 2'}
                  name={'brand2'}
                  text={'Spark 2'}

                />
              </div>

            </div>
          </form>

          <ShowMore />

        </SidebarItem>

        {/* Model */}

        <SidebarItem title='Модель'>

          <form className={s.modelSearchForm} action="#" method='get'>
            <input className={s.modelSearch} type="text" placeholder='Введите модель ' />
          </form>

          <form className={s.modelList} action='#' method='get'>
            <div className=
              {s.checkboxBlock}>
              <div className={s.checkboxBlock1}>
                <CheckboxInput
                  value={'Sea-doo Spark 2'}
                  name={'model1'}
                  text={'Sea-doo Spark 2'}
                />

                <CheckboxInput
                  value={'SeaDoo GTI 155'}
                  name={'model3'}
                  text={'SeaDoo GTI 155'} />
              </div>

              <div className={s.checkboxBlock2}>
                <CheckboxInput
                  value={'SeaDoo Spark 90'}
                  name={'model2'}
                  text={'SeaDoo Spark 90'}
                />

                <CheckboxInput
                  value={'SeaDoo GTR 230'}
                  name={'model4'}
                  text={'SeaDoo GTR 230'} />
              </div>
            </div>
          </form>

          <ShowMore />

        </SidebarItem>

        {/* Promotions */}

        <SidebarItem title='Акции'>
          <div className={s.promotionsBtnBlock}>
            <button className={`${s.promotionsBtn} ${s.promotionsBtnSale}`}>SALE</button>
            <button className={`${s.promotionsBtn} ${s.promotionsBtnNew}`}>NEW</button>
            <button className={`${s.promotionsBtn} ${s.promotionsBtnHit}`}>HIT</button>
            <button className={`${s.promotionsBtn} ${s.promotionsBtnDealer}`}>ДИЛЕР</button>

          </div>
        </SidebarItem>

        {/* Country */}

        <SidebarItem title='Страны'>

          <form className={s.countrylist} action='#' method='get'>
            <div className={s.checkboxBlock}>
              <div className={s.checkboxBlock1}>
                <CheckboxInput
                  value={'Russia'}
                  name={'country1'}
                  text={'Россия'}
                  checked={'checked'}
                />

                <CheckboxInput
                  value={'China'}
                  name={'country3'}
                  text={'Китай'}
                />
              </div>

              <div className={s.checkboxBlock2}>
                <CheckboxInput
                  value={'Germany'}
                  name={'country2'}
                  text={'Германия'}
                  checked={'checked'}
                />

                <CheckboxInput
                  value={'USA'}
                  name={'country4'}
                  text={'CША'}
                />
              </div>
            </div>
          </form>

          <ShowMore />

        </SidebarItem>


        <div className={s.buttonsFooter}>
          <button className={`${s.btnSelect} ${s.btnFooter}`} type='submit'>
            <span className={s.btnSelectText}> ВЫБРАТЬ</span>
          </button>

          <button className={`${s.btnMore} ${s.btnFooter}`}
            type='button'>
            <span className={s.btnMoreText}>Дополнительные параметры</span>
          </button>

          <button className={`${s.btnReset} ${s.btnFooter}`}
            type='reset'>
            <span className={s.btnResetText}>Сбросить фильтр</span>
          </button>
        </div>

      </div>
    </div>
  )
}


export default Sidebar