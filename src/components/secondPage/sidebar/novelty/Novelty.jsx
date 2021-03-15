import './Novelty.css';
import SidebarItem from './../sidebarItem/SidebarItem'
import RadioInput from './../RadioInput/RadioInput';


const Novelty = () => {
  return (
    <SidebarItem title='Новинки'>
      <form className='existenceList'>
        <RadioInput
          value={'all'}
          name={'novelty1'}
          text={'Все'}
        />

        <RadioInput
          value={'novelty'}
          name={'novelty2'}
          text={'Новинки'}
        />

        <RadioInput
          value={'stock'}
          name={'novelty3'}
          text={'Акции'}
        />
      </form>
    </SidebarItem>
  )
}


export default Novelty