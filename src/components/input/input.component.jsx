import React from 'react';

const Input = ({ handleChange, label, ...props }) => (
    <div>
        <input onChange={handleChange} {...props} />
        {
            label ? <label>{label}</label> : null
        }
    </div>
);

export default Input;