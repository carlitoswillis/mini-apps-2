import React from 'react';
import ReactPaginate from 'react-paginate';

const $ = require('jquery');
const styles = require('../styles.css');
class App extends React.Component {
  constructor(props) {
    super(props);
    const { url } = this.props;
    this.state = {
      url,
      data: [],
      offset: 0,
      page: 0,
      limit: 20,
    };
  }

  componentDidMount() {
    this.loadDateFromServer();
    console.log('huh');

  }

  loadDateFromServer() {
    const {
      url, perPage, page, limit,
    } = this.state;
    $.ajax({
      url: `${url}?_page=${page + 1}&_limit=${limit}`,
      type: 'GET',
      success: (data, textStatus, request) => {
        this.setState({
          data,
          pageCount: Math.ceil(request.getResponseHeader('X-Total-Count') / 20),
        }, () => {
          console.log(`${url}?_page=${page + 1}&_limit=${limit}`);
        });
      },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString()); // eslint-disable-line
      },
    });
  }

  handlePageClick(data) {
    const { selected } = data;
    this.setState({ page: selected }, () => {
      this.loadDateFromServer();
    });
  }

  render() {
    return (
      <div>
        <ReactPaginate
          className={styles.paginate}
          previousLabel="previous"
          nextLabel="next"
          breakLabel="..."
          breakClassName="break-me"
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick.bind(this)}
          containerClassName="pagination"
          subContainerClassName="pages pagination"
          activeClassName="active"
        />
      </div>
    );
  }
}

export default App;
