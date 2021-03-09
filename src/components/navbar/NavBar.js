import './NavBar.css';

function NavBar() {
  return (
    <div className="nav-bar">
      <ul className="nav-bar-items" >
        <li className="nav-bar-item"><a className="nav-bar-link" href="#">запчасти</a></li>
        <li className="nav-bar-item"><a className="nav-bar-link" href="#">моторы</a></li>
        <li className="nav-bar-item"><a className="nav-bar-link" href="#">шины</a></li>
        <li className="nav-bar-item"><a className="nav-bar-link" href="#">электроника</a></li>
        <li className="nav-bar-item"><a className="nav-bar-link" href="#">инструменты</a></li>
        <li className="nav-bar-item"><a className="nav-bar-link" href="#">аксессуары</a></li>
      </ul>
    </div>
  );
}

export default NavBar;
