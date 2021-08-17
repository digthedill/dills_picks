import { useState } from "react"
import SideBar from "./components/SideBar"
import Main from "./components/Main"
import styled from "styled-components"
import bg from "./assets/bg_dark.png"

const App = () => {
  const [userSelections, setUserSelections] = useState([])
  const [playlist, setPlaylist] = useState([])

  return (
    <Container>
      <Wrapper>
        <SideBar
          userSelections={userSelections}
          setUserSelections={setUserSelections}
          setPlaylist={setPlaylist}
        />
        <Main
          userSelections={userSelections}
          playlist={playlist}
          setPlaylist={setPlaylist}
        />
      </Wrapper>
    </Container>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  margin-bottom: 2rem;

  h1 {
    font-size: 3.4rem;
  }

  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: safe;
  }
`

const Container = styled.main`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  /* BG*/
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export default App
