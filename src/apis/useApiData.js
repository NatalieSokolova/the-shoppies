const axios = require("axios");
const API_KEY = "6e0f31c";

export default async function getMovies(movieTitle) {
  // returns data retrieved from GET req to OMDB api
  return axios({
    method: "GET",
    url: `https://www.omdbapi.com/?s=${movieTitle}&apikey=${API_KEY}`,
    params: {
      type: "movie",
      // page: "1-5",
    },
  })
    .then((response) => {
      console.log("SUCCESS: ", response.data.Search);
    })
    .catch((error) => {
      console.log("ERROR: ", error);
    });
}
