import styled from "styled-components"
import Playlist from "./Playlist"

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

const WelcomeText = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 5rem;
    color: #f4f4f4;
    padding-left: 0.5rem;
  }
  @media (max-width: 850px) {
    h2 {
      display: none;
    }
  }
`

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 850px) {
    display: ${(props) => (props.playlist.length < 1 ? "none" : "block")};
    max-width: 650px;
  }
`

export default Main
