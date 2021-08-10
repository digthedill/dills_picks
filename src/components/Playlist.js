import { useState } from "react"
import axios from "axios"
import useToken from "../hooks/useToken"
import stringifySelections from "../utils/stringifySelections"
import PlaylistTrack from "./PlaylistTrack"
import styled from "styled-components"

const Playlist = ({ userSelections, playlist, setPlaylist }) => {
  const token = useToken()

  // add more params
  const generatePlaylist = () => {
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

  // create an overflow container

  return (
    <Containter>
      {userSelections.length ? (
        <button onClick={generatePlaylist}>Fire</button>
      ) : null}

      {playlist &&
        playlist.map((song) => {
          return <PlaylistTrack key={song.id}>{song}</PlaylistTrack>
        })}
    </Containter>
  )
}

const Containter = styled.div`
  margin: 3rem 0;
  overflow-y: scroll;
`

export default Playlist
