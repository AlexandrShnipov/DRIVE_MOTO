import s from './BreadCrumbs.module.scss';

const BreadCrumbs = (props) => {
  return (
    <div className={s.breadCrumbs}>
      <ul className={s.breadCrumbsMenu}>
        <li className={s.breadCrumbsList}><a className={s.breadCrumbsLink} href="#">Главная</a></li>
        <li className={s.breadCrumbsList}><a className={s.breadCrumbsLink} href="#">Гидроциклы</a></li>
      </ul>
    </div>
  );
}

export default BreadCrumbs;
