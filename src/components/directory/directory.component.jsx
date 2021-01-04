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
                },
                {
                    id: 2,
                    title: 'Hoodies',
                },
            ],
        }
    }

    render() {
        return(
            <div>
                {this.state.sections.map(({id, title}) => <MenuItem title={title} key={id} />)}
            </div>
        );
    }
}

export default Directory;