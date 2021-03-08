import './FooterList.css';

function FooterList({title}) {
  return (
    <div className="footer__information">
      <h3 className="footer__information title-footer">{title}</h3>
      <ul className="footerlist">
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
    </ul>
    </div>
  );
}

export default FooterList;
