import './ProductCard.css';
import Icon from '../Icon/Icon';
import heart from './../../assets/images/heart.svg'

function ProductCard(props) {
  return (
    <div className="product-card">
      <Icon file={heart}/>
      <img  className="product-img" src="" alt=""/>
      <h4 className="product-name">{name}</h4>
      <span>9 800 ₽</span>
    </div>
  );
}

export default ProductCard;
