import React from 'react';
import styles from '/styles/Button.module.css'

const Button = ({btnName, className, style, type, onClick, disabled, sx}) => {
    return (
        <button
            className={`${className} ${styles.Button}`}
            type={type}
            onClick={onClick}
            disabled={disabled}
            style={{ ...style}}
            sx={{...sx}}
        >
            {btnName}
        </button>
    );
};

export default Button;
