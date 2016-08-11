import React from 'react'

// give SearchBar functionality from React.Component
// use a class based (smart) component
class SearchBar extends React.Component {
  constructor(props){
    super(props);

    this.state = { searchTerm: ''};
  }
  // every class needs an explicit render method
  // this is the syntax inside a JS class, different from regular JS object
  render() {
    return  (
      <div>
        <input onChange={event => this.setState({ searchTerm: event.target.value})} />
      </div>
  );
  }

  onInputChange(event) {
    console.log(event.target.value);
  }

}

export default SearchBar;