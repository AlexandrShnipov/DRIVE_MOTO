import s from './Icon.module.scss';


const Icon = (props) => {
  return (
    <div className={s.icon}>
      <a className={s.iconLink} href="#">
        <img className={s.iconImg} src={props.file} alt=""/>
      </a>
    </div>
  );
}

export default Icon;
