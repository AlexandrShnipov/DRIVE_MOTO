import s from './HeaderLocation.module.scss';
import location from './../../../assets/images/location.svg'

const HeaderLocation = () =>{
  return (
    <div className={s.headerLocation}>
      <img src={location} alt=""/>
      <span>Москва,  ул. Науки  25</span>
    </div>
  );
}

export default HeaderLocation;
