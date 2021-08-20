import axios from "axios"

const getSpotifyObject = (token, query, cb) => {
  axios
    .get("https://api.spotify.com/v1/search", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      params: {
        q: query,
        type: "artist,track,album",
        limit: 8,
      },
    })
    .then((response) => {
      cb(response.data.artists.items)
    })
}

export default getSpotifyObject
