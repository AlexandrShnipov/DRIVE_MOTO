import './Sidebar';
import Existence from './existence/Existence';
import Novelty from './novelty/Novelty';
import Price from './price/Price';
import Power from './power/Power';
import EnginePower from './enginePower/EnginePower';
import Speed from './speed/Speed';
import Brand from './brand/Brand';
import Model from './model/Model';
import Promotions from './promotions/Promotions';
import Country from './country/Country';
import SidebarItem from './sidebarItem/SidebarItem';
import s from './Sidebar.module.scss';



const Sidebar = () => {
  return (
    <div className={s.sidebar}>

      <div className={s.sidebarLinks}>
        <a className={s.sidebarLink} href="#">параметры</a>
        <a className={s.sidebarLink} href="#">по марке</a>
      </div>

      <div className={s.parameters}>
        <Existence />
        <Novelty />
        <Price />
        <Power />
        <EnginePower />
        <Speed />
        <Brand />
        <Model />
        <Promotions />
        <Country />


        <div className={s.sidebarButtons}>
          <button className={s.btnSelect} type='submit'>
            <span className={s.btnSelectText}> ВЫБРАТЬ</span>
          </button>

          <button className={s.btnMore} type='button'>
            <span className={s.btnMoreText}>Дополнительные параметры</span>
          </button>

          <button className={s.btnSubmit} type='reset'>
            <span className={s.btnSubmitText}>Сбросить фильтр</span>
          </button>
        </div>

      </div>
    </div>
  )
}


export default Sidebar