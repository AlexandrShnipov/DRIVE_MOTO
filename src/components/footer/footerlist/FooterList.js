import './FooterList.css';

function FooterList({title, items}) {
  const itemsList = items.map (item => 
    <li className="footer-item">
      <a className="footer-link" href={item.url}>{item.text}</a>
    </li>)

  return (
    <div className="footer-information">
      <h3 className="footer-information title-footer">{title}</h3>
      <ul className="footer-items">
        {itemsList}
      </ul>
    </div>
  );
}

export default FooterList;
