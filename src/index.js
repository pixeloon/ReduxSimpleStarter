import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyBpZMIlvat7tyRT-N-EI6233xXnatiuSXo'

// create component, should produce HTML
const App =  () => {
  return (
    <div>
    <SearchBar />
  </div>
  );
}


// put the generated HTML in the DOM
// rendering an instance of App component in container DIV
ReactDOM.render(<App/>, document.querySelector('.container'));