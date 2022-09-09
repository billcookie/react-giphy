import React from 'react';

const SearchBar = (props) => {
  const handleChange = (event) => {
    const { fetchGiphy } = props;
    fetchGiphy(`${event.currentTarget.value} star wars`);
  };
  return (
    <input className="form-search form-control" type="text" placeholder="May the meme be with you..." onChange={handleChange} />
  );
};

export default SearchBar;
