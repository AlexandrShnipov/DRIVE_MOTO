import s from './SidebarItem.module.scss';

const SidebarItem = (props) => {
return (
  <details className={s.sidebarItem}>
    <summary className={s.sidebarItemTitle}>{props.title}
    </summary>
    <div className={s.childrenWrapper}>
      {props.children}
    </div>
  </details>
)
}

export default SidebarItem;