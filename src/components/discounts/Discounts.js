import './Discounts.css';
import discount1 from './../../assets/images/CFMOTO-X6-EPS_blue 1.svg'
import discount2 from './../../assets/images/CFMOTO-X6-EPS_blue 1.svg'
import Button from '../button/Button';

function Discounts() {
  return ( 
    <div className = "discounts">
      <img className = "discounts-img-1" src={discount1} alt=""/>
      <img className = "discounts-img-2" src={discount2} alt=""/>
      <h2 className = "discounts-title">CКИДКИ на все запчасти до 70% </h2>
      <Button className="button-white" name='ПОСМОТРЕТЬ ВСЁ'/>
    </div>
  );
}

export default Discounts;