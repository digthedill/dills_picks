import { useState, useEffect } from "react"
import axios from "axios"

const useInitializeToken = () => {
  const [token, setToken] = useState("")

  useEffect(() => {
    axios("https://accounts.spotify.com/api/token", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          btoa(
            process.env.REACT_APP_CLIENT_ID +
              ":" +
              process.env.REACT_APP_CLIENT_SECRET
          ),
      },
      data: "grant_type=client_credentials",
      method: "POST",
    }).then((tokenRes) => {
      // console.log(tokenRes.data.access_token)
      setToken(tokenRes.data.access_token)
    })
  }, [])
  return token
}

export default useInitializeToken
