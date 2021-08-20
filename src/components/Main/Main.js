import Playlist from "../Playlist"
import { Container, WelcomeText } from "./styles"

const Main = ({ userSelections, playlist, setPlaylist }) => {
  return (
    <Container playlist={playlist}>
      {playlist.length < 1 && (
        <WelcomeText>
          <h2>
            The artists you love <br />
            bring the music <br />
            you need
          </h2>
        </WelcomeText>
      )}
      <Playlist
        userSelections={userSelections}
        playlist={playlist}
        setPlaylist={setPlaylist}
      />
    </Container>
  )
}

export default Main
