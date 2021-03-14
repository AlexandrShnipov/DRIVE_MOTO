import './BreadCrumbs.css';

const BreadCrumbs = (props) => {
  return (
    <div className="breadCrumbs">
      <ul className="breadCrumbsMenu">
        <li className="breadCrumbsList"><a className="breadCrumbsLink" href="#">Главная</a></li>
        <li className="breadCrumbsList"><a className="breadCrumbsLink" href="#">Гидроциклы</a></li>
      </ul>
      </div>
  );
}

export default BreadCrumbs;
