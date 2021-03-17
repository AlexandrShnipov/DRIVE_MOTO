import s from './SaleBanner.module.scss';
import SaleImg from '../../../assets/images/bootmotor.svg' 

const SaleBanner = () => {
  return ( 
    <div className={s.saleBanner}>
      <div className={s.saleTop}>
        <div className={s.saleStok}>АКЦИЯ</div>
        <span className={s.salePrice}>190 000</span>
      </div>
      <img className={s.saleImg} src={SaleImg} alt=""/>
      <h3 className={s.saleTitle}>Лодочный мотор Suzuki DF9.9BRS</h3>
      <div className={s.saleDown}>Акция действует до <span className={s.saleData}>31.08.2020</span></div>
    </div>
  );
}

export default SaleBanner;