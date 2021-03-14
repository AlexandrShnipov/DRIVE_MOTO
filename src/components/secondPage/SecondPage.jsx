import BreadCrumbs from '../breadCrumbs/BreadCrumbs';
import Sidebar from './sidebar/Sidebar.jsx';
import GidroCard from '../gidroCard/GidroCard';
import images1 from './../../assets/images/gidroCard/1.svg';
import images2 from './../../assets/images/gidroCard/2.svg';
import images3 from './../../assets/images/gidroCard/3.svg';
import images4 from './../../assets/images/gidroCard/4.svg';
import images5 from './../../assets/images/gidroCard/5.svg';
import images6 from './../../assets/images/gidroCard/6.svg';
import images7 from './../../assets/images/gidroCard/7.svg';
import images8 from './../../assets/images/gidroCard/8.svg';
import images9 from './../../assets/images/gidroCard/9.svg';
import images10 from './../../assets/images/gidroCard/10.svg';
import images11 from './../../assets/images/gidroCard/11.svg';
import images12 from './../../assets/images/gidroCard/12.svg';
import heart from './../../assets/images/heart.svg';
import './SecondPage.css';


const SecondPage = (props) => {
return (
<div className="secondPage"> 
  <BreadCrumbs/>
  <h2> Гидроциклы </h2>
  <div className="sorting"> Sortings
    </div>
  <div className="categoriesProducts">
      <div className="coptions">
        <Sidebar/>
  </div>
  <div className="cards">
    <GidroCard text= "Гидроцикл BRP SeaDoo GTI 130hp SE Black\Mango"
    heart={heart}
    price="1 049 500 ₽"
    image={images1}/>
    <GidroCard text= "Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic"
    heart={heart}
    price="1 100 475 ₽"
    image={images2}/>
    <GidroCard text= "Гидроцикл BRP SeaDoo GTR 230hp X California green"
    heart={heart}
    price="1 323 700 ₽"
    image={images3}/>
    <GidroCard text= "Гидроцикл BRP SeaDoo GTR 230hp STD Black / Gulfstream"
    heart={heart}
    price="нет в наличии"
    absence="Сообщить о поступлении"
    image={images4}/>
    <GidroCard text= "Гидроцикл BRP SeaDoo GTX 300hp LTD Liquid Metal"
    heart={heart}
    price="1 543 000 ₽"
    image={images5}/>
    <GidroCard text= "Гидроцикл BRP SeaDoo Spark 60hp 2 up"
    heart={heart}
    price="732 345 ₽"
    image={images6}/>
    <GidroCard text= "Гидроцикл BRP SeaDoo Spark GTS 90hp Rental"
    heart={heart}
    price="857 666 ₽"
    image={images7}/>
    <GidroCard text= "Гидроцикл BRP SeaDoo WAKE 230hp PRO Teal blue"
    heart={heart}
    price="1 229 711 ₽"
    image={images8}/>
    <GidroCard text= "Гидроцикл Spark 2-UP 900 Ho Ace Chili Pepper"
    heart={heart}
    price="587 440 ₽"
    image={images9}/>
    <GidroCard text= "Гидроцикл Spark 2-UP 900 Ho Ace Pineapple"
    heart={heart}
    price="587 440 ₽"
    image={images10}/>
    <GidroCard text= "Гидроцикл BRP Sea-doo Spark 2-UP 900 Ace Vanilla"
    heart={heart}
    price="нет в наличии"
    absence="Сообщить о поступлении"
    image={images11}/>
    <GidroCard text= "Гидроцикл Spark 3-UP 900 HO Ace IBR Blueberry"
    heart={heart}
    price="нет в наличии"
    absence="Сообщить о поступлении"
    image={images12}/>
      </div>
      </div>
    </div>
);
}

export default SecondPage;

