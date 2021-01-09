import React from 'react';

const Button = ({ children, ...props }) => (
    // https://css-tricks.com/use-button-element/
    // use rather buttons than inputs
    <button {...props}>
        {children}
    </button>
);

export default Button;