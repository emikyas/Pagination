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
                <div className="container">
                    <div className="col-md-12">
                        <p>Showing {totalCount} total in the database.</p>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="table-responsive">
                                    <table className="table table-bordered table-list">
                                        <thead>
                                            <tr>
                                                <th scope="col">Name</th>
                                                <th scope="col">Type</th>
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
                            <div className="col-md-6"></div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default List;