
import FooterList from './footerlist/FooterList';
import Social from './social/Social';
import Subscribtion from './subscribtion/Subscribtion';

const number1 = 1;
const number2 = 2;

function sum(a, b) {
  const c = a + b;

  return c;
}

const c = sum(number1, number2);

console.log('sum', c);


function print(title) {
  title = title;
  console.log(title);
}

print('Hello');
print('Buy')

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
