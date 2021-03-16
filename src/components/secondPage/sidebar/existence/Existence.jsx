import s from './Existence.module.scss';
import SidebarItem from './../sidebarItem/SidebarItem';
import RadioInput from './../RadioInput/RadioInput';

const Existence = () => {
  return (
    <SidebarItem title='Наличие'>
      <form className={s.existenceList}>
        <RadioInput
          value={'inStock'}
          name={'existence1'}
          text={'В наличие'}
        />

        <RadioInput
          value={'order'}
          name={'existence2'}
          text={'Под заказ'}
        />
      </form>
        </SidebarItem>
      )
}


export default Existence