import './Icon.css';


function Icon(props) {
  return (
    <div className="icon">
      <a className="icon-link" href="#">
        <img className="icon-img" src={props.file} alt=""/>
      </a>
    </div>
  );
}

export default Icon;
