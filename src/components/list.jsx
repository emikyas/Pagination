import _ from 'lodash';
import React, { Component } from 'react';
import { getStaticList } from '../services/staticList';
import { paginate } from '../utils/paginate';
import Pagination from './common/pagination';

class List extends Component {
    state = {
        lists: getStaticList(),
        currentPage: 1,
        pageSize: 4
    }
    
    getPageData = () => {
        const { pageSize, currentPage, lists: allList } = this.state;

        const filtered = allList.map(l => l);
        const lists = paginate(filtered, currentPage, pageSize);
        return { totalCount: filtered.length, data: lists };
        
    }

    handlePageChange = page => {
        this.setState({ currentPage: page });
    };
    
    render() {
        const {
            pageSize,
            currentPage,
            sortColumn,
            selectedGenre,
        } = this.state;

        const { totalCount, data: lists } = this.getPageData();
        return (
            <section>
                <p>Showing {totalCount} total in the database.</p>
                <div className="container">
                    <div className="row">
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                {lists.map(l =>
                                    <tr key={l.id}>
                                        <td>{l.title}</td>
                                        <td>{l.type}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    
                    </div>
                    <Pagination
                        itemsCount={totalCount}
                        pageSize={this.state.pageSize}
                        currentPage={this.state.currentPage}
                        onPageChange={this.handlePageChange}
                    />
                </div>
            </section>
        );
    }
}
 
export default List;