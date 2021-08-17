import { useState } from "react"
import axios from "axios"
import useToken from "../hooks/useToken"
import stringifySelections from "../utils/stringifySelections"
import styled from "styled-components"
import { Button } from "../styles/tools"

const CreatePlaylistBtn = ({ userSelections, setPlaylist }) => {
  const [generatedPlayist, setGeneratedPlaylist] = useState(false)
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
      setPlaylist(res.data.tracks)
    })
  }
  if (userSelections.length < 1) {
    return null
  }
  return (
    <Container>
      {generatedPlayist && <Button>Play in Spotify</Button>}
      <Button onClick={generatePlaylist}>Create Playlist</Button>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  margin: 2rem 0;

  display: flex;

  justify-content: space-evenly;
`
export default CreatePlaylistBtn
