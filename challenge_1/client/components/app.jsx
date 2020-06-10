import React from 'react';
import ReactPaginate from 'react-paginate';
import Results from './results';

const $ = require('jquery');
const styles = require('../styles.css');

class App extends React.Component {
  constructor(props) {
    super(props);
    const { url, perPage } = this.props;
    this.state = {
      url,
      data: [],
      page: 0,
      perPage,
    };
  }

  componentDidMount() {
    this.loadDateFromServer();
  }

  loadDateFromServer() {
    const {
      url, page, query, perPage,
    } = this.state;
    $.ajax({
      url: `${url}?_page=${page + 1}&_limit=${perPage}`.concat(`${query ? `&q=${query}` : ''}`),
      type: 'GET',
      success: (data, textStatus, request) => {
        this.setState({
          data,
          pageCount: Math.ceil(request.getResponseHeader('X-Total-Count') / perPage),
        }, () => {
          document.getElementById('query').value = '';
          this.setState({ query: undefined });
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

  handleKeyPress(e) {
    let { query } = this.state;
    query = query === undefined
      ? ''
      : query;
    if (e.key === 'Enter') {
      this.loadDateFromServer();
    } else {
      this.setState({
        query: query + e.key,
      });
    }
  }

  render() {
    const { pageCount, data } = this.state;
    return (
      <div>
        <input id="query" onKeyPress={this.handleKeyPress.bind(this)} placeholder="search for something" />
        <Results results={data} />
        <ReactPaginate
          className={styles.paginate}
          previousLabel="previous"
          nextLabel="next"
          breakLabel="..."
          breakClassName="break-me"
          pageCount={pageCount}
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
