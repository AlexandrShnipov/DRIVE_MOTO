import './CardSmall.css';

function CardSmall({title, img, url}) {
  return (
    <div className="card-small">
      <div className="card-small-box">
        <h3 className="card-small-title">{title}</h3>
        <a className="card-small-link" href={url}>Подробнее</a>
      </div>
      <img className="card-img" src={img} alt={title} />
    </div>
  );
}

export default CardSmall;
