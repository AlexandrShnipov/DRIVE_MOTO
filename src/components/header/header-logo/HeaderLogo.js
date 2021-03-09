import './HeaderLogo.css';
import logo from './../../../assets/images/logo.svg'

function HeaderLogo() {
  return (
    <img className="header-logo" src={logo} alt="" />
  );
}

export default HeaderLogo;
