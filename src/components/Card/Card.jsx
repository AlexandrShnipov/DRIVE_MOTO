import s from './Card.module.scss';
import imag from './../../assets/images/Vector.svg';


const Card = (props) => {
  return (
    <div className={s.Card}>
      <span className = {s.sale}>{props.sale}</span>
      <img className = {s.iconHeart} src={props.heart}/>
      <img className = {s.productImg} src={props.image}/>
      <h3 className = {s.productTitle}> {props.text}</h3>
      <span className = {s.priceProducts}> {props.price}</span>
      <span className = {s.novAilableProduct}>{props.novAilableProduct}</span>
      <a className={s.informAboutAdmission} href="#">{props.informAboutAdmission}</a>
      <button className = {s.btnCart}><img src={imag}/></button>
      </div>
  );
}

export default Card;