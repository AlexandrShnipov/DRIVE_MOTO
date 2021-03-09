import './HeaderNavBar.css';

function HeaderNavBar() {
  return (
    <div className="header-nav-bar">
      <ul className="header-nav-bar-items">
        <li className="header-nav-bar-item"><a className="header-nav-bar-link" href="#">Квадроциклы</a></li>
        <li className="header-nav-bar-item"><a className="header-nav-bar-link" href="#">Катера</a></li>
        <li className="header-nav-bar-item"><a className="header-nav-bar-link" href="#">Гидроциклы</a></li>
        <li className="header-nav-bar-item"><a className="header-nav-bar-link" href="#">Лодки</a></li>
        <li className="header-nav-bar-item"><a className="header-nav-bar-link" href="#">Вездеходы</a></li>
        <li className="header-nav-bar-item"><a className="header-nav-bar-link" href="#">Снегоходы</a></li>
        <li className="header-nav-bar-item"><a className="header-nav-bar-link" href="#">Двигатели</a></li>
        <li className="header-nav-bar-item"><a className="header-nav-bar-link" href="#">Запчасти</a></li>
      </ul>
    </div>
  );
}

export default HeaderNavBar;
