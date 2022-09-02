import React from 'react';
import { Provider } from 'react-redux';

import SearchBar from './components/SearchBar';
import store from './store';

function SearchFromList() {
    return (
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
  }
  
  export default SearchFromList;