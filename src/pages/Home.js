import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';

const Home = () => {
  const [input, setinput] = useState('');
  const onInputChange = ev => {
    setinput(ev.target.value);
  };
  const onSearch = () => {
    // https://api.tvmaze.com/search/shows?q=mens
    fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
      .then(r => r.json())
      .then(result => {
        console.log(result);
      });
  };
  const onKeyDown = ev => {
    if (ev.keyCode === 13) {
      onSearch();
    }

    console.log(ev.keyCode);
  };
  return (
    <MainPageLayout>
      <input
        type=" text"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />
      <button type="button" onClick={onSearch}>
        Search
      </button>
    </MainPageLayout>
  );
};

export default Home;
