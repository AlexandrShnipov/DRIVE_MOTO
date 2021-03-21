import s from'./HeaderUserMenu.module.scss';
import Icon from "../../icon/Icon";
import heart from './../../../assets/images/heart.svg';
import user from './../../../assets/images/user.svg';
import cart from './../../../assets/images/cart.svg';

const HeaderUserMenu = () => {
  return (
    <div className={s.headerUserMenu}> 
      <a className={s.headerUserMenuLink} href="#"><Icon file={heart}/></a>
      <a className={s.headerUserMenuLink} href="#"><Icon file={user}/></a>
      <div className={s.headerUserMenuBox}>
        <a className={s.headerUserMenuLink} href="#"><Icon file={cart}/></a>
        <span className={s.headerUserMenuCart}></span>
      </div>
    </div>
  );
}

export default HeaderUserMenu;
