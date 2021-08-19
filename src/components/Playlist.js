import { useEffect, useState } from "react"
import PlaylistTrack from "./PlaylistTrack"
import styled from "styled-components"

const Playlist = ({ playlist }) => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null)

  useEffect(() => {
    // function for preventing multiple previews to play at once
    document.addEventListener(
      "play",
      (e) => {
        const audios = document.getElementsByTagName("audio")
        for (let i = 0; i < audios.length; i++) {
          if (audios[i] !== e.target) {
            audios[i].pause()
          }
        }
      },
      true
    )
  }, [])

  return (
    <Container>
      {playlist &&
        playlist.map((song) => {
          return (
            <PlaylistTrack
              key={song.id}
              currentlyPlaying={currentlyPlaying}
              setCurrentlyPlaying={setCurrentlyPlaying}
            >
              {song}
            </PlaylistTrack>
          )
        })}
    </Container>
  )
}

const Container = styled.div`
  margin: 3rem 0;
  overflow-y: auto;

  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 500px;
    overflow-y: scroll;
  }
`

export default Playlist
