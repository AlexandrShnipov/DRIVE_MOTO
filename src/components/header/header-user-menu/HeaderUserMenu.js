import './HeaderUserMenu.css';
import Icon from "./../../icon/Icon";
import heart from './../../../assets/images/heart.svg';
import user from './../../../assets/images/user.svg';
import cart from './../../../assets/images/cart.svg';

function HeaderUserMenu() {
  return (
    <div className="header-user-menu"> 
      <a href="#"><Icon file={heart}/></a>
      <a href="#"><Icon file={user}/></a>
      <a href="#"><Icon file={cart}/></a>
    </div>
  );
}

export default HeaderUserMenu;
