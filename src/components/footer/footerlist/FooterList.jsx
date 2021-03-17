import s from './FooterList.module.scss';

const FooterList = ({title, items}) => {
  const itemsList = items.map (item => 
    <li className={s.footerItem}>
      <a href={item.url}>{item.text}</a>
    </li>)

  return (
    <div className={s.footerInformation}>
      <h3 className={s.footerInformation}>{title}</h3>
      <ul className={s.footerItems}>
        {itemsList}
      </ul>
    </div>
  );
}

export default FooterList;
