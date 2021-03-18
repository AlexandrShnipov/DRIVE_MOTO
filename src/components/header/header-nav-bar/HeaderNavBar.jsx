import s from './HeaderNavBar.module.scss';

const HeaderNavBar = () => {
  return (
    <div className={s.headerNavBar}>
      <ul>
        <li><a href="#">Квадроциклы</a></li>
        <li><a href="#">Катера</a></li>
        <li><a href="#">Гидроциклы</a></li>
        <li><a href="#">Лодки</a></li>
        <li><a href="#">Вездеходы</a></li>
        <li><a href="#">Снегоходы</a></li>
        <li><a href="#">Двигатели</a></li>
        <li><a href="#">Запчасти</a></li>
      </ul>
    </div>
  );
}

export default HeaderNavBar;