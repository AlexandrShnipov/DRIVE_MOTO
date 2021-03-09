import './Header.css';
import HeaderLocation from "./header-location/HeaderLocation";
import HeaderLogo from "./header-logo/HeaderLogo";
import HeaderMenu from "./header-menu/HeaderMenu";
import HeaderNavBar from "./header-nav-bar/HeaderNavBar";
import HeaderUserMenu from "./header-user-menu/HeaderUserMenu";



function Header() {
  return (
    <div className="header">
      <div className="header-top">
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
