import { useState } from "react"
import SideBar from "./components/SideBar"
import Main from "./components/Main"
import styled from "styled-components"
import bgCircles from "./assets/purple_circles.png"

const App = () => {
  const [userSelections, setUserSelections] = useState([])

  return (
    <Container>
      <Wrapper>
        <SideBar
          userSelections={userSelections}
          setUserSelections={setUserSelections}
        />
        <Main userSelections={userSelections} />
      </Wrapper>
    </Container>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 3.4rem;
  }

  @media (max-width: 850px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const Container = styled.main`
  color: #333;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  /* BG*/
  background-image: url(${bgCircles}),
    linear-gradient(
      90deg,
      rgba(104, 166, 200, 1) 35%,
      rgba(118, 200, 104, 1) 100%
    );

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* background: rgb(104, 166, 200); */
`

export default App
