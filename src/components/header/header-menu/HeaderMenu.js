import './HeaderMenu.css';

function HeaderMenu () {
  return (
    <div className="header-menu">
          <ul className="menu-items">
            <li className="menu-item"><a className="menu-link" href="#">Магазины</a></li>
            <li className="menu-item"><a className="menu-link" href="#">Акции</a></li>
            <li className="menu-item"><a className="menu-link" href="#">Доставка и оплата</a></li>
          </ul>
        </div>
  );
}

export default HeaderMenu;
