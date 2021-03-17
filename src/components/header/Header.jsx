import s from './Header.module.scss';
import HeaderLocation from "./header-location/HeaderLocation";
import HeaderLogo from "./header-logo/HeaderLogo";
import HeaderMenu from "./header-menu/HeaderMenu";
import HeaderNavBar from "./header-nav-bar/HeaderNavBar";
import HeaderUserMenu from "./header-user-menu/HeaderUserMenu";




const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.headerTop}>
        <HeaderMenu/>
        <HeaderLogo/>
        <HeaderLocation/>
        <HeaderUserMenu/>
      </div>
      <HeaderNavBar/>
    </div>
  );
}

export default Header;
