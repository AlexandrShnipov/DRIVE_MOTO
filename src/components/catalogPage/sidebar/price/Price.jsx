import s from './Price.module.scss';

import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';


const useStyles = makeStyles({
  root: {
    maxWidth: 291,
    fontFamily: 'Barlow',
    fontSize: '14px',
    lineHeight: '17px',
    texDecorationLine: 'underline',
    color: '#2F3035',
  },
  thumb: {
    width: '3.69px',
    height: '3.69px',
  }
});

function valuetext(value) {
  return `${value}°C`;
}

const Price = () => {

  const classes = useStyles();
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>

      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
      <div className={s.counter}>
        <div><span className={s.counterText}>от</span>{value[0]}</div>
        <div><span className={s.counterText}>до</span>{value[1]}</div>
      </div>

    </div>
  )
}

export default Price