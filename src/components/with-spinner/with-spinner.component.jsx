import React from 'react';

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
    return isLoading ? (<span>loading</span>) : (
        <WrappedComponent {...otherProps} />
    );
};

export default WithSpinner;