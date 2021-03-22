import s from './HeaderNavBar.module.scss';

const HeaderNavBar = () => {
  return (
    <div className={s.headerNavBar}>
      <ul>
        <li className={s.headerNavBarItem}><a href="#">Квадроциклы</a></li>
        <li className={s.headerNavBarItem}><a href="#">Катера</a></li>
        <li className={s.headerNavBarItem}><a href="#">Гидроциклы</a></li>
        <li className={s.headerNavBarItem}><a href="#">Лодки</a></li>
        <li className={s.headerNavBarItem}><a href="#">Вездеходы</a></li>
        <li className={s.headerNavBarItem}><a href="#">Снегоходы</a></li>
        <li className={s.headerNavBarItem}><a href="#">Двигатели</a></li>
        <li className={s.headerNavBarItem}><a href="#">Запчасти</a></li>
      </ul>
    </div>
  );
}

export default HeaderNavBar;
