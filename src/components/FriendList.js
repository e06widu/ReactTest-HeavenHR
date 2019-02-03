import React, { Component, PropTypes } from 'react';
import styles from './FriendList.css';
import FriendListItem from './FriendListItem';
import Pagination from './Pagination';

class FriendList extends Component {

  state = {
    currentPage: 1,
    totalPages: 0,
    pageLimit: 2
  }

  // Handle the pagination change 
  onPageChanged = data => {

    this.setState({
      currentPage: data.currentPage,
      totalPages: data.totalPages,
      pageLimit: data.pageLimit
    });

  }

  // Filter current page result 
  getCurrentPageData = () => {
    const offset = (this.state.currentPage - 1) * this.state.pageLimit;
    return this.props.friends.slice(offset, offset + this.state.pageLimit)
  }

  render() {
    const total = this.props.friends.length;
    const pageData = this.getCurrentPageData();

    // Show pagination when data is available 
    const pagination = (total > this.state.pageLimit) ? (
      <Pagination totalRecords={total} pageLimit={2} pageNeighbours={1} onPageChanged={this.onPageChanged} />
    ) : null;

    return (
      <div>
        <ul className={styles.friendList}>
          {
            pageData.map((friend, index) => {
              return (
                <FriendListItem
                  key={index}
                  id={index + this.state.currentPage}
                  name={friend.name}
                  gender={friend.gender}
                  starred={friend.starred}
                  {...this.props.actions} />
              );
            })
          }
        </ul>
        <div>
          {pagination}
        </div>

      </div>
    );
  }

}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default FriendList
