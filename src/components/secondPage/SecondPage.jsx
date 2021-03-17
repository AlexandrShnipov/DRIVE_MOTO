import BreadCrumbs from '../breadCrumbs/BreadCrumbs';
import Sidebar from './sidebar/Sidebar';
import Card from './../card/Card';
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
import iconMenu from './../../assets/images/gidroCard/menu_icon.svg';
import iconBurger from './../../assets/images/gidroCard/burger_icon.svg';
import s from './SecondPage.module.scss';

const SecondPage = (props) => {
  return (
    <div className={s.secondPage}>
      <BreadCrumbs />
      <h2 className={s.sortingTitle}> Гидроциклы </h2>
      <div className={s.sorting}>
        <div className={s.sortingLeft}>
          <a className={s.sortingLeftMenu} href="#">Полноприводные</a>
          <a className={s.sortingLeftMenu} href="#">от 5000</a>
          <a className={s.sortingLeftMenu} href="#">BRP</a>
          <a className={s.sortingLeftMenu} href="#">еще</a>
        </div>
        <div className={s.sortingRight}>
          <select className={s.sortingRightSelect}>
            <option>По полулярности</option>
            <option>По наличию</option>
          </select>
          <img className={s.iconMenu} src={iconMenu} />
          <img className={s.iconBurger} src={iconBurger} />
        </div>
      </div>
      <div className={s.categoriesProducts}>
        <div className={s.coptions}>
          <Sidebar />
        </div>
        <div className={s.cards}>
          <Card text="Гидроцикл BRP SeaDoo GTI 130hp SE Black\Mango"
            heart={heart}
            price="1 049 500 ₽"
            image={images1} />
          <Card text="Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic"
            sale="SALE"
            heart={heart}
            price="1 100 475 ₽"
            image={images2} />
          <Card text="Гидроцикл BRP SeaDoo GTR 230hp X California green"
            heart={heart}
            price="1 323 700 ₽"
            image={images3} />
          <Card text="Гидроцикл BRP SeaDoo GTR 230hp STD Black / Gulfstream"
            sale="SALE"
            heart={heart}
            not="нет в наличии"
            absence="Сообщить о поступлении"
            image={images4} />
          <Card text="Гидроцикл BRP SeaDoo GTX 300hp LTD Liquid Metal"
            heart={heart}
            price="1 543 000 ₽"
            image={images5} />
          <Card text="Гидроцикл BRP SeaDoo Spark 60hp 2 up"
            heart={heart}
            price="732 345 ₽"
            image={images6} />
          <Card text="Гидроцикл BRP SeaDoo Spark GTS 90hp Rental"
            heart={heart}
            price="857 666 ₽"
            image={images7} />
          <Card text="Гидроцикл BRP SeaDoo WAKE 230hp PRO Teal blue"
            sale="SALE"
            heart={heart}
            price="1 229 711 ₽"
            image={images8} />
          <Card text="Гидроцикл Spark 2-UP 900 Ho Ace Chili Pepper"
            heart={heart}
            price="587 440 ₽"
            image={images9} />
          <Card text="Гидроцикл Spark 2-UP 900 Ho Ace Pineapple"
            heart={heart}
            price="587 440 ₽"
            image={images10} />
          <Card text="Гидроцикл BRP Sea-doo Spark 2-UP 900 Ace Vanilla"
            sale="SALE"
            heart={heart}
            not="нет в наличии"
            absence="Сообщить о поступлении"
            image={images11} />
          <Card text="Гидроцикл Spark 3-UP 900 HO Ace IBR Blueberry"
            heart={heart}
            not="нет в наличии"
            absence="Сообщить о поступлении"
            image={images12} />
        </div>
      </div>
      <div class={s.secondPagePagination}>
        <a class={s.active} href="#">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">...</a>
        <a href="#">11</a>
      </div>
    </div>
  );
}

export default SecondPage;

