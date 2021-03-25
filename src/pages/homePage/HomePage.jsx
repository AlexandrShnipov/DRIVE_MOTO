import s from './HomePage.module.scss';
import Header from '../../components/header/Header';
import SliderSpeed from '../../components/sliderSpeed/SliderSpeed';
import SaleBanner from './saleBanner/SaleBanner';
import CardSmall from './cardSmall/CardSmall';
import Discounts from '../../components/discounts/Discounts';
import Footer from '../../components/footer/Footer';
import Search from '../../components/search/Search';

import img1 from '../../assets/images/CFMOTO-X6-EPS_blue 1.svg';
import img2 from '../../assets/images/jet_ski_PNG90 1.svg';
import img3 from '../../assets/images/boat_PNG36 1.svg';
import img4 from '../../assets/images/rmvector551 1.svg';
import img5 from '../../assets/images/2018-Maverick-X3-X-rc-TURBO.svg';
import img6 from '../../assets/images/boot-motors.svg';
import SearchBox from '../../components/searchBox/SearchBox';
import Carousel from '../../components/carousel/Carousel';


const HomePage = () => {
  const cards = [
    {
      title: 'Квадроциклы',
      img: img1,
      url: '',
    },
    {
      title: 'Гидроциклы',
      img: img2,
      url: '',
    },
    {
      title: 'Катера',
      img: img3,
      url: '',
    },
    {
      title: 'Снегоходы',
      img: img4,
      url: '',
    },
    {
      title: 'Вездеходы',
      img: img5,
      url: '',
    },
    {
      title: 'Двигатели',
      img: img6,
      url: '',
    },
  ];
  const cardsList = cards.map((c) => (
    <CardSmall title={c.title} img={c.img} url={c.url} />
  ));

  return (
    <div className={s.homePage}>
      <div className={s.container}>
        <div className={s.homeWrapper}>
          <SliderSpeed />
          <SaleBanner />
        </div>
        <SearchBox/>
        <div className={s.homeBox}>{cardsList}</div>
        <div className={s.carousel}>
          <Carousel/>
        </div>
        <Discounts />
      </div>
    </div>
  );
}

export default HomePage;
