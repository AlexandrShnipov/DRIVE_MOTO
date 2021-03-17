import s from './CardSmall.module.scss';

const CardSmall = ({title, img, url}) => {
  return (
    <div className={s.cardSmall}>
      <div className={s.cardSmallBox}>
        <h3 className={s.cardSmallTitle}>{title}</h3>
        <a className={s.cardSmallLink} href={url}>Подробнее</a>
      </div>
      <img className={s.cardImg} src={img} alt={title} />
    </div>
  );
}

export default CardSmall;
