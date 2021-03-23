import s from'./Search.module.scss';
import Button from '../button/Button';


const Search = ({classname, children}) => {
  return (
      <div className={s.Search}>
        <input className={s.searchInput}  type="text" placeholder="Введите марку"/>
        <Button className="buttonBlue">ИСКАТЬ</Button>
      </div>
  );
}

export default Search;
