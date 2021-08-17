import PlaylistTrack from "./PlaylistTrack"
import styled from "styled-components"

const Playlist = ({ userSelections, playlist, setPlaylist }) => {
  // add more params
  return (
    <Container>
      {playlist &&
        playlist.map((song) => {
          return <PlaylistTrack key={song.id}>{song}</PlaylistTrack>
        })}
    </Container>
  )
}

const Container = styled.div`
  margin: 3rem 0;
  overflow-y: auto;
  max-width: 650px;

  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 500px;
    overflow-y: scroll;
  }
`

export default Playlist
