import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import s from './SimpleRating.css';


export default function SimpleRating() {
    const [value, setValue] = React.useState(4);

    return (
        <div>
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Rating className={s.ratingBlue} name="read-only" value={value} readOnly/>
            </Box>
        </div>
    );
}