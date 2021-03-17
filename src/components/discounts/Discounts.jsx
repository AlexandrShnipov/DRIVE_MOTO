import s from './Discounts.module.scss';
import discount1 from './../../assets/images/CFMOTO-X6-EPS_blue 1.svg'
import discount2 from './../../assets/images/2018-Maverick-X3-X-rc-TURBO.svg'
import Button from '../button/Button';

const Discounts = () => {
  return ( 
    <div className={s.discounts}>
      <div>
        <img className={s.discountsImg1} src={discount1} alt=""/>
        <img className={s.discountsImg2} src={discount2} alt=""/>
      </div>
      <h2 >CКИДКИ<br/> на все запчасти<br/> до 70% </h2>
      <Button className={s.buttonWhite}>ПОСМОТРЕТЬ ВСЕ</Button>
    </div>
  );
}

export default Discounts;