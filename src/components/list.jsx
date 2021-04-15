import React, { Component } from 'react';
import { getStaticList } from '../services/staticList';

class List extends Component {
    state = {
        lists: getStaticList()
     }
    render() { 
        return (
            <div>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.lists.map(l =>
                        <tr>
                            <td>{l.title}</td>
                            <td>{l.type}</td>
                        </tr>
                    )}
                </tbody>
            </div>
        );
    }
}
 
export default List;