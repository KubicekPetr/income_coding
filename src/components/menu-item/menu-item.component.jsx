import React from 'react';

import { withRouter } from 'react-router-dom';

const MenuItem = ({title, linkUrl, history, match}) => (
    <div onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <h1>{title}</h1>
    </div>
);

export default withRouter(MenuItem);