import './GidroCard.css';
import imag from './../../assets/images/Vector.svg';


function GidroCard (props) {
  return (
    <div className="gidroCard">
      <img className = "iconHeart" src={props.heart}/>
      <img className = "productImg" src={props.image}/>
      <h3 className = "productNames"> {props.text}</h3>
      <span className = "priceProducts"> {props.price}</span>
      <button className = "cart"><img src={imag}/></button>
      </div>
  );
}

export default GidroCard;