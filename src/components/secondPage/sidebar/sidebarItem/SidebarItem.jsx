import'./SidebarItem.css';

const SidebarItem = (props) => {
return (
  <details className='sidebarItem'>
    <summary className="sidebarItemTitle">{ props.title}
    </summary>
    <div className='childrenWrapper'>
      {props.children}
    </div>
  </details>
)
}

export default SidebarItem;