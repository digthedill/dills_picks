import { useState } from "react"
import axios from "axios"
import useToken from "../../hooks/useToken"
import stringifySelections from "../../utils/stringifySelections"

import { Container, Button } from "./styles"
import { AiOutlineArrowRight } from "react-icons/ai"

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
      setPlaylist(res.data.tracks)
    })
  }
  if (userSelections.length < 1) {
    return null
  }
  return (
    <Button onClick={generatePlaylist}>
      <AiOutlineArrowRight />
    </Button>
  )
}

export default CreatePlaylistBtn
