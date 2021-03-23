import s from'./SearchBox.module.scss';
import Button from '../button/Button';
import Search from '../search/Search';


const SearchBox = ({classname, name}) => {
  return (
    <div className={s.searchBox}>
      <div className={s.searchBoxWrap}>
        <a className={s.searchBoxLink} href="#">Поиск по  номеру</a>
        <a className={s.searchBoxLink} href="#">Поиск по марке</a>
        <a className={s.searchBoxLink} href="#">Поиск по названию товара</a>
      </div>
    <Search/>
    </div>
  );
}

export default SearchBox;
