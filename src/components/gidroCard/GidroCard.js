import './GidroCard.css';

function GidroCard (props) {
  return (
    <div className="gidroCard">
      <img className = "productImg"src={props.image}/>
      <h3 className = "productNames"> {props.text} </h3>
      <span className = "priceProducts"> {props.price} </span>
      </div>
  );
}

export default GidroCard;