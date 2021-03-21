import s from'./Search.module.scss';
import Button from '../button/Button';


const Search = ({classname, name}) => {
  return (
      <div className={s.Search}>
      <input className={s.searchInput} type="text"/>
      <Button className="buttonBlue">ОТПРАВИТЬ</Button>
    </div>
  );
}

export default Search;
