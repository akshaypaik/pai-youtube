import React, { useEffect, useState } from 'react';
import './Searchbar.css';
import { GOOGLE_SEARCH_SUGGESTION_API } from '../../../utils/constants/apiConstants';
import SearchResultContainer from './SearchResultContainer/SearchResultContainer';
import { useDispatch, useSelector } from 'react-redux';
import { updateSearchSuggestionCache } from '../../../utils/ReduxStore/searchSlice';

const Searchbar = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const dispatch = useDispatch();
  const cacheSearchResults = useSelector((store) => store.search.searchResultCache);
  const darkMode = useSelector((store) => store.app.darkMode);

  useEffect(() => {
    // Early return pattern
    if(cacheSearchResults[searchQuery]){
      setSearchResults(cacheSearchResults[searchQuery]);
      return;
    }
    const timer = setTimeout(() => {
      fetchQuerySearchResults(searchQuery);
    }, 300);

    return () => {
      clearTimeout(timer);
    }

  }, [searchQuery]);

  const handleQuerySearch = (event) => {
    setSearchQuery(event.target.value);
  }

  const fetchQuerySearchResults = async () => {
    const results = await fetch(`${GOOGLE_SEARCH_SUGGESTION_API}${searchQuery}`);
    const jsonResult = await results.json();
    setSearchResults(jsonResult[1]);
    dispatch(updateSearchSuggestionCache({ searchString: searchQuery, searchResult: jsonResult[1] }));
  }

  return (
    <div className='search-bar-container'>
      <div className='search-bar'>
        <input type='text' placeholder='Search...'
          value={searchQuery}
          onChange={(e) => handleQuerySearch(e)} 
          onBlur={() => setSearchResults([])} 
          onFocus={fetchQuerySearchResults} />
        <svg xmlns="http://www.w3.org/2000/svg" fill={darkMode ? 'white' : 'black'} height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{ display: 'inherit', height: '100%' }}><path clipRule="evenodd" d="M16.296 16.996a8 8 0 11.707-.708l3.909 3.91-.707.707-3.909-3.909zM18 11a7 7 0 00-14 0 7 7 0 1014 0z" fillRule="evenodd"></path><img id="img" draggable="false" className="style-scope yt-img-shadow" alt="Avatar image" height="32" width="32" src="https://yt3.ggpht.com/yti/ANjgQV-zFt1B7XeQ598f8NF8stTz2kpJxymy-MZrvbuK56PTAr9K=s88-c-k-c0x00ffffff-no-rj" /></svg>
      </div>
      {searchResults.length > 0 && <SearchResultContainer results={searchResults} />}
    </div>
  )
}

export default Searchbar