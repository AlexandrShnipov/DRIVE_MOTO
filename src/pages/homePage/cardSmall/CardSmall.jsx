import s from './CardSmall.module.scss';
import {NavLink, BrowserRouter } from "react-router-dom";

const CardSmall = ({title, img, url}) => {
  return (
    <BrowserRouter>
    <div className={s.cardSmall}>
      <div className={s.cardSmallBox}>
        <h3 className={s.cardSmallTitle}>{title}</h3>
        <NavLink className={s.cardSmallLink} to={'/'}>Подробнее</NavLink>
      </div>
      <img className={s.cardImg} src={img} alt={title} />
    </div>
    </BrowserRouter>
  );
}

export default CardSmall;
