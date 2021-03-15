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




const Sidebar = () => {
  return (
    <div className='sidebar'>

      <div className='sidebarLinks'>
        <a className='sidebarLink' href="#">параметры</a>
        <a className='sidebarLink' href="#">по марке</a>
      </div>

      <div className='parameters'>
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


        <div className='sidebarButtons'>
          <button className='btnSelect' type='submit'>
            <span className='btnSelectText'> ВЫБРАТЬ</span>
          </button>

          <button className='btnMore' type='button'>
            <span className='btnMoreText'>Дополнительные параметры</span>
          </button>

          <button className='btnSubmit' type='reset'>
            <span className='btnSubmitText'>Сбросить фильтр</span>
          </button>
        </div>

      </div>
    </div>
  )
}


export default Sidebar