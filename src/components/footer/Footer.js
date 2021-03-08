
import FooterList from './footerlist/FooterList';
import Social from './social/Social';
import Subscribtion from './subscribtion/Subscribtion';

function Footer() {
  return (
    <div className="footer">
      <Subscribtion/>
      <FooterList title={'Информация'}/> 
      <FooterList title={'Интернет-магазин'}/> 
      <Social/>
      <div><span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Footer;
