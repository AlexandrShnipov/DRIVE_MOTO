import './HeaderLocation.css';
import location from './../../../assets/images/location.svg'

function HeaderLocation() {
  return (
    <div className="header-location">
      <img src={location} alt=""/>
      <span>Москва,  ул. Науки  25</span>
    </div>
  );
}

export default HeaderLocation;
