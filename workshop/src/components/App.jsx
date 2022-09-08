import React, { useState } from 'react';

import SearchBar from './SearchBar';
import GifList from './GifList';
import Gif from './Gif';

const giphy = require('giphy-api')({
  apiKey: 'iprlCTXFwcvem7hp4OvQJWXp53m5ys8K',
  https: true
});

const App = () => {
  const [gifIdSelected, setGifIdSelected] = useState("zNIge9PEMukqk");
  const [giIdList, setGiIdList] = useState(["9gISqB3tncMmY", "jd6TVgsph6w7e", "4cVmpGbEzBBOdtaIB4", "QScgAd74HWyMU", "FqdarV7kQMaBo0JYcd", "l1ugjTZeqpqjsYJs4", "gzDKCRnNv5B1DOeB9O", "1HPUSulSOHDpe", "26lCQ16c2frswEMA8"]);
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
// rsc => to get a react functional component

// look at giphy api to change this app to be something else
