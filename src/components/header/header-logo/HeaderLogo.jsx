import s from './HeaderLogo.module.scss';
import logo from './../../../assets/images/logo.svg'

const HeaderLogo = () => {
  return (
    <img className={s.header-logo} src={logo} alt="" />
  );
}

export default HeaderLogo;
