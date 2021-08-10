import { useEffect } from "react"
import styled from "styled-components"

const PlaylistTrack = ({ children }) => {
  const song = children
  // console.log(song)
  const albumArtwork = song.album.images[2].url //medium size
  const trackName = song.name
  const artist = song.artists[0].name
  const previewUrl = song.preview_url

  useEffect(() => {
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
      <ThumbnailAndTitle>
        <img
          src={albumArtwork}
          alt={trackName + " img"}
          width="50"
          height="50"
        />
        <div>
          <h5>{trackName}</h5>
          <p>{artist}</p>
        </div>
      </ThumbnailAndTitle>
      {previewUrl && (
        <audio controls id={song.id}>
          <source src={previewUrl} />
        </audio>
      )}
    </Container>
  )
}
const ThumbnailAndTitle = styled.div`
  display: flex;
  align-items: start;
  div {
    margin-left: 0.4rem;

    p {
      font-size: 0.7rem;
    }
  }
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.7);
  width: 85%;
  border-radius: 5px;
`

export default PlaylistTrack
