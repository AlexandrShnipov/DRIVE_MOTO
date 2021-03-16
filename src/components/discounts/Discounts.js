import './Discounts.css';
import discount1 from './../../assets/images/CFMOTO-X6-EPS_blue 1.svg'
import discount2 from './../../assets/images/2018-Maverick-X3-X-rc-TURBO.svg'
import Button from '../button/Button';

function Discounts() {
  return ( 
    <div className="discounts">
      <div>
      <img className="discounts-img-1" src={discount1} alt=""/>
      <img className="discounts-img-2" src={discount2} alt=""/>
      </div>
      <h2 className="discounts-title">CКИДКИ<br/> на все запчасти<br/> до 70% </h2>
      <Button className="button-white">ПОСМОТРЕТЬ ВСЕ</Button>
    </div>
  );
}

export default Discounts;