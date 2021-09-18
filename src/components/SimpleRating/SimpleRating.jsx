import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { withStyles } from '@material-ui/core/styles';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const StyledRating = withStyles({
    iconFilled: {
        color: '#1C62CD',
    },
    iconHover: {
        color: '#1C62CD',
    },
})(Rating);

export default function CustomizeRatings() {
    return (
        <div>
            <StyledRating
                name="customized-empty"
                defaultValue={4}
                precision={0.5}
                emptyIcon={<StarBorderIcon fontSize="inherit"
                />}
            />
        </div>
    );
}