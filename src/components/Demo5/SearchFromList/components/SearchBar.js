import React from 'react';
import { connect } from 'react-redux';

const SearchBar = (props) => {
  const { articles, searchTerm, onSearch } = props;
  const applyFilter = searchTerm => article => article.title.toLowerCase().includes(searchTerm.toLowerCase());
  const filterArticles = articles.filter(applyFilter(searchTerm));
  
  return (
    <>
      <div className='Search Container'>
        <label for='searchInput'>Search </label>
        <input
          id='searchInput'
          type='text'
          value={searchTerm}
          onChange={event => onSearch(event.target.value)}
        />
      </div>
      {filterArticles && (
        <ul>
          {filterArticles.map(({ id, url, title }) =>
            <li key={id}>
              <a href={url}>
                {title}
              </a> 
            </li>
          )}
        </ul>
      )}
    </>
  )
}

const mapStateToProps = state => ({
  articles: state.articlesState.articles,
  searchTerm: state.searchState.searchTerm,
});

const mapDispatchToProps = dispatch => ({
  onSearch: searchTerm => dispatch({ 
    type: 'SEARCH_SET',
    searchTerm
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);