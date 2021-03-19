import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import s from './BreadCrumbs.module.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function CustomSeparator() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        <Link className={s.link} color="blue" href="/" onClick={handleClick}>
        Главная
        </Link>
        <Typography className={s.link} color="white">Гидроциклы</Typography>
        {/* <Link className={s.link} color="blue" href="/getting-started/installation/" onClick={handleClick}>
        Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic
        </Link> */}
      </Breadcrumbs>
    </div>
  );
}




