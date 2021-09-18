import s from './dropDownList.scss'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import { ExpandLess } from '@material-ui/icons';



// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 68,
//     margin: 0,
//   },
  
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//     color: '#48494D',
//     fontFamily: 'Barlow',
//     fontSize: '14px',
//     lineHeight: '1.21',
//     marginTop: '0',
//     backgroundColor: 'none',
//     border: 'none',
//   },
//   svgIcon: {
//     right: '21px',
//   }
// }));

const DropDownList = (props) => {
  // const classes = useStyles();
  // const [state, setState] = React.useState({
  //   age: '',
  //   name: 'hai',
  // });

  // const handleChange = (event) => {
  //   const name = event.target.name;
  //   setState({
  //     ...state,
  //     [name]: event.target.value,
  //   });
  // };

  return (

    <div className='parametr'>
      <h3 className=' parametrTitle'>{props.title}</h3>

      {/* <FormControl className={classes.formControl}>
        <NativeSelect
          value={state.parametr}
          onChange={handleChange}
          name="parametr"
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'parametr' }} variant={'outlined'}
          IconComponent={ExpandLess}
        >
          <option value={props.value1}>{props.value1}</option>
          <option value={props.value2}>{props.value2}</option>
          <option value={props.value3}>{props.value3}</option>
          <option value={props.value4}>{props.value4}</option>
          <option value={props.value5}>{props.value5}</option>
        </NativeSelect>

      </FormControl> */}

      <select className=' parametrBlock' name={props.name}>
          <option className='parametrItem' selected value={props.value1}>{props.value1}</option>
          <option className='parametrItem' value={props.value2}>{props.value2}</option>
          <option className='parametrItem' value={props.value3}>{props.value3}</option>
          <option className='parametrItem' value={props.value4}>{props.value4}</option>
          <option className='parametrItem' value={props.value5}>{props.value5}</option>
        </select>
    </div>

  )
}


export default DropDownList