import React, { Component } from 'react';

import MenuItem from '../menu-item/menu-item.component';

class Directory extends Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    id: 1,
                    title: 'T-shirts',
                    linkUrl: 'tshirts',
                },
                {
                    id: 2,
                    title: 'Hoodies',
                    linkUrl: 'hoodies'
                },
            ],
        }
    }

    render() {
        return(
            <div>
                {this.state.sections.map(({id, title, linkUrl}) => <MenuItem title={title} linkUrl={linkUrl} key={id} />)}
            </div>
        );
    }
}

export default Directory;