import './Footer.css';
import FooterList from './footerlist/FooterList';
import Social from './social/Social';
import Subscribtion from './subscribtion/Subscribtion';


const infoItems = [{
  text: 'О компании',
  url: '#'
},{
  text: 'Контакты',
  url: '#'
},{
  text: 'Акции',
  url: '#'
},{
  text: 'Магазины',
  url: '#'
}];

const storeItems = [{
  text: 'Доставка и самовывоз',
  url: '#'
},{
  text: 'Оплата',
  url: '#'
},{
  text: 'Возврат-обмен',
  url: '#'
},{
  text: 'Новости',
  url: '#'
}];

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
      <Subscribtion/>
      <FooterList title={'Информация'} items={infoItems}/> 
      <FooterList title={'Интернет-магазин'} items={storeItems}/> 
      <Social/>
      </div>
      <div className="footer-down">
        <span>Договор оферты</span>
        <span>Политика обработки персональных данных</span>
      </div>
    </div>
  );
}

export default Footer;
