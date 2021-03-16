import './SaleBanner.css';
import SaleImg from '../../../assets/images/bootmotor.svg' 

function SaleBanner() {
  return ( 
    <div className="sale-banner" >
      <div className="sale-top">
        <div className="sale-stok">АКЦИЯ</div>
        <span className="sale-price">190 000</span>
      </div>
      <img className="sale-img" src={SaleImg} alt=""/>
      <h3 className="sale-title">Лодочный мотор Suzuki DF9.9BRS</h3>
      <div className="sale-down">Акция действует до <span className="sale-data">31.08.2020</span></div>
    </div>
  );
}

export default SaleBanner;