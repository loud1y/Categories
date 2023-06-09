import React from 'react';
import classes from "./Buttons.module.css"

const Button = ({children, ...props}) => {
    return (
        <button {...props} className={classes.button}>
            {children}
        </button>
    );
};

export default Button;