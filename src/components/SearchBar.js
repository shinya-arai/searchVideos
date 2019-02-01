import React, { Component } from 'react';

class SearchBar extends Component {
  state = { term: '' };

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment" style={{marginTop: 10}}>
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Search videos from youtube</label>
            <input
              type="text"
              placeholder='input keyword, and put enter!!'
              value={this.state.term}
              onChange={(e) => this.setState({term: e.target.value})} 
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;