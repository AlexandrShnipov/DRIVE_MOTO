import s from './HeaderMenu.module.scss';

const HeaderMenu = () => {
  return (
    <div className={s.headerMenu}>
          <ul>
            <li><a href="#">Магазины</a></li>
            <li><a href="#">Акции</a></li>
            <li><a href="#">Доставка и оплата</a></li>
          </ul>
        </div>
  );
}

export default HeaderMenu;
