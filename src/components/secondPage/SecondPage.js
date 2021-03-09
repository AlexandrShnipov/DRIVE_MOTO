import BreadcrumbListProduct from '../breadcrumbListProduct/BreadcrumbListProduct';
import ProductCard from '../productCard/ProductCard';
import images1 from './../../assets/images/gidrotsikl-brp-seadoo-gti-130hp-se-blackmango-orange-73936232995706_small6 1.svg'
import images2 from './../../assets/images/gidrotsikl-brp-seadoo-gti-130hp-se-blackmango-orange-73936232995706_small6 2.svg'
import images3 from './../../assets/images/gidrotsikl-brp-seadoo-gti-130hp-se-blackmango-orange-73936232995706_small6 3.svg'
import images4 from './../../assets/images/gidrotsikl-brp-seadoo-gti-130hp-se-blackmango-orange-73936232995706_small6 4.svg'
import images5 from './../../assets/images/gidrotsikl-brp-seadoo-gti-130hp-se-blackmango-orange-73936232995706_small6 5.svg'
import images6 from './../../assets/images/gidrotsikl-brp-seadoo-gti-130hp-se-blackmango-orange-73936232995706_small6 6.svg'
import images7 from './../../assets/images/gidrotsikl-brp-seadoo-gti-130hp-se-blackmango-orange-73936232995706_small6 7.svg'
import images8 from './../../assets/images/gidrotsikl-brp-seadoo-gti-130hp-se-blackmango-orange-73936232995706_small6 8.svg'
import images9 from './../../assets/images/s-l225 1.svg'
import images10 from './../../assets/images/s-l225 2.svg'
import images11 from './../../assets/images/s-l225 3.svg'
import images12 from './../../assets/images/s-l225 4.svg'
import './SecondPage.css'

function SecondPage (props) {
return (
<div className="secondPage"> 
  <BreadcrumbListProduct/>
  <h2> Гидроциклы </h2>
  <div className="sorting"> Sortings
    </div>
  <div className="categoriesProducts">
  <div className="coptions"> Menu
  </div>
  <div className="cards">
    <ProductCard text= "Гидроцикл BRP SeaDoo GTI 130hp SE Black\Mango"
    price="1 049 500 ₽"
    image={images1}/>
    <ProductCard text= "Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic"
    price="1 100 475 ₽"
    image={images2}/>
    <ProductCard text= "Гидроцикл BRP SeaDoo GTR 230hp X California green"
    price="1 323 700 ₽"
    image={images3}/>
    <ProductCard text= "Гидроцикл BRP SeaDoo GTR 230hp STD Black / Gulfstream"
    price="нет в наличии Сообщить о поступлении"
    image={images4}/>
    <ProductCard text= "Гидроцикл BRP SeaDoo GTX 300hp LTD Liquid Metal"
    price="1 543 000 ₽"
    image={images5}/>
    <ProductCard text= "Гидроцикл BRP SeaDoo Spark 60hp 2 up"
    price="732 345 ₽"
    image={images6}/>
    <ProductCard text= "Гидроцикл BRP SeaDoo Spark GTS 90hp Rental"
    price="857 666 ₽"
    image={images7}/>
    <ProductCard text= "Гидроцикл BRP SeaDoo WAKE 230hp PRO Teal blue"
    price="1 229 711 ₽"
    image={images8}/>
    <ProductCard text= "Гидроцикл Spark 2-UP 900 Ho Ace Chili Pepper"
    price="587 440 ₽"
    image={images9}/>
    <ProductCard text= "Гидроцикл Spark 2-UP 900 Ho Ace Pineapple"
    price="587 440 ₽"
    image={images10}/>
    <ProductCard text= "Гидроцикл BRP Sea-doo Spark 2-UP 900 Ace Vanilla"
    price="нет в наличии Сообщить о поступлении"
    image={images11}/>
    <ProductCard text= "Гидроцикл Spark 3-UP 900 HO Ace IBR Blueberry"
    price="нет в наличии Сообщить о поступлении"
    image={images12}/>
      </div>
      </div>
    </div>
);
}

export default SecondPage;

