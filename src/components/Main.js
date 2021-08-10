import { useState } from "react"
import styled from "styled-components"
import Playlist from "./Playlist"

const Main = ({ userSelections }) => {
  const [playlist, setPlaylist] = useState([])

  return (
    <Container>
      {playlist.length < 1 && (
        <WelcomeText>
          <h2>
            The name of the game <br />
            is lightworks
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
    font-size: 5.5rem;
    text-shadow: 1px 2px purple;
    color: #f4f4f4;
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
    background: rgba(0, 0, 0, 0.1);
    /* backdrop-filter: blur(17px); */
  }
`

const PreviewCard = styled.div`
  width: 800px;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  img {
    margin: 0.3rem;
    padding: 1rem;
    max-width: 200px;

    object-fit: cover;
  }
`
export default Main
