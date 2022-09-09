import React, { useState } from 'react';

import SearchBar from './SearchBar';
import GifList from './GifList';
import Gif from './Gif';

const giphy = require('giphy-api')({
  apiKey: 'iprlCTXFwcvem7hp4OvQJWXp53m5ys8K',
  https: true
});

const App = () => {
  const [gifIdSelected, setGifIdSelected] = useState("olnuKV0a3Et5C");
  const [giIdList, setGiIdList] = useState(["K9yzeKyvvva9i", "D6C9xVqgMI5yg", "26lCQ16c2frswEMA8", "6jt0mmbWj7Jige5tuA", "gzDKCRnNv5B1DOeB9O", "3ornk6UHtk276vLtkY", "DqILdGsqAUkms", "cnQn0eeU9dmZW", "Khurh5g5bBIkg", "3o84sw9CmwYpAnRRni"]);
  const fetchGiphy = (keyword) => {
    giphy.search({
      q: keyword,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      setGiIdList(res.data.map((gif) => gif.id));
    });
  };
  const changeSelectedGif = (newSelectedGifId) => {
    setGifIdSelected(newSelectedGifId);
  };

  return (
    <div>
      <div className="left-scene">
        <SearchBar fetchGiphy={fetchGiphy} />
        <div className="selected-gif">
          <Gif gifId={gifIdSelected} />
        </div>
      </div>
      <div className="right-scene">
        <GifList gifIdList={giIdList} changeSelectedGif={changeSelectedGif} />
      </div>
    </div>
  );
};

export default App;
