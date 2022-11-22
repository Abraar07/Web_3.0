import { useEffect, useState } from "react";

import dotenv from "dotenv"
//import.meta
//const APIKEY = import.meta.env.VITE_GIPHY_API;
const APIKEY = "tjjyyI92Ts1d0cHWrLzM5x2DairTh8ZJ";

const useFetch = ({ keyword }) => {
  const [gifUrl, setGifUrl] = useState();
  
  const fetchGifs = async () => {
    try {
      const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=abraar&api_key=${APIKEY}&q=${keyword.split(" ").join("")}&limit=1`);
      const { data } = await response.json();

      setGifUrl(data[0]?.images?.downsized_medium.url);
    } catch (error) {
      setGifUrl("https://i.pinimg.com/originals/68/a0/9e/68a09e774e98242871c2db0f99307420.gif");
    }
  };

  useEffect(() => {
    if (keyword) fetchGifs();
  }, [keyword]);

  return gifUrl;
};

export default useFetch;