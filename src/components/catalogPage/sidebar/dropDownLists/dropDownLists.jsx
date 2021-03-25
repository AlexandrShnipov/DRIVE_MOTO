import s from './dropDownLists'
import DropDownList from './dropDownList/dropDownList'

const DropDownLists = () => {
  return (
        <div>
      <DropDownList
        title={'Мощность, л.с.'}
        name={'power'}
        value1={'90'}
        value2={'130'}
        value3={'154'}
        value4={'230'}
        value5={'300'}
      />
  
      <DropDownList
      title={'Мощность двигателя, л.с.'}
      name={'power'}
      value1={'90'}
      value2={'130'}
      value3={'154'}
      value4={'230'}
      value5={'300'}
      />
      
      <DropDownList
      title={'Макс. скорость'}
      name={'speed'}
      value1={'90'}
      value2={'130'}
      value3={'154'}
      value4={'230'}
      value5={'300'}
      />

    </div>
  )
}

export default DropDownLists