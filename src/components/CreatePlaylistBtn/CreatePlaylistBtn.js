import { useState } from "react"
import axios from "axios"
import useToken from "../../hooks/useToken"
import stringifySelections from "../../utils/stringifySelections"

import { Container } from "./styles"
import { Button } from "../../styles/tools"
import { FaSpotify } from "react-icons/fa"

const CreatePlaylistBtn = ({ userSelections, setPlaylist }) => {
  const [generatedPlaylist, setGeneratedPlaylist] = useState(false)
  const token = useToken()

  const generatePlaylist = () => {
    setGeneratedPlaylist(true)
    axios("https://api.spotify.com/v1/recommendations", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      params: {
        seed_artists: stringifySelections(userSelections),
        max_popularity: 60,
      },
    }).then((res) => {
      console.log(res.data)
      setPlaylist(res.data.tracks)
    })
  }
  if (userSelections.length < 1) {
    return null
  }
  return (
    <Container>
      {generatedPlaylist && (
        <Button>
          <FaSpotify />
        </Button>
      )}
      <Button onClick={generatePlaylist}>Generate Playlist</Button>
    </Container>
  )
}

export default CreatePlaylistBtn
