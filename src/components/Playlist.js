import PlaylistTrack from "./PlaylistTrack"
import styled from "styled-components"

const Playlist = ({ userSelections, playlist, setPlaylist }) => {
  // add more params

  // create an overflow container

  return (
    <Containter>
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
