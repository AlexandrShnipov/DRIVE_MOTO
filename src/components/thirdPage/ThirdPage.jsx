import s from './ThirdPage.module.scss';
import BreadCrumbs from '../breadCrumbs/BreadCrumbs';
import imagesBig from './../../assets/images/gidroCard/2.svg';
import heart from './../../assets/images/heart.svg';
import rating from './../../assets/images/gidroCard/Group.svg';
import ShowMore from './../showMore/ShowMore'
import SimpleRating from '../SimpleRating/SimpleRating';
import TableCard from '../TableCard/TableCard';

const ThirdPage = (props) => {
    return (
        <div className={s.thirdPage}>
            <BreadCrumbs />
            <li className={s.breadCrumbsList}>
                <a className={s.breadCrumbsLink} href="#">
                    Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic
        </a>
            </li>
            <div className={s.bigCard}>
                <div className={s.blockLeft}>
                    <span className={s.sale}>SALE</span>
                    <img className={s.imagesBigGidro} src={imagesBig} />
                    <span className={s.priceProductSale}> 1 200 475 ₽</span>
                    <span className={s.priceProducts}> 1 100 475 ₽</span>
                    <span className={s.textProducts}> Нашли дешевле? Снизим цену!</span>
                </div>
                <div className={s.blockRight}>
                    <h2 className={s.nameBigCard}>Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic</h2>
                    <span> Код товара: <span>366666-2</span></span>
                    <div>
                        <img className={s.imgHeart} src={heart} />
                        <img className={s.imgRating} src={rating} />

                        <ShowMore />



                        <SimpleRating />
<TableCard/>
                        <ShowMore />

                    </div>
                </div>
            </div>

        </div>
    );
}



export default ThirdPage;