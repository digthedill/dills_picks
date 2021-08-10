import React from "react"
import styled from "styled-components"
import SearchBar from "./SearchBar"

const SideBar = ({ userSelections, setUserSelections }) => {
  return (
    <Container>
      <Title>
        <h1>
          Dill's <span>Picks</span>
        </h1>
        <h3>
          Add your favorite artists <br />
          to generate dill's picks
        </h3>
      </Title>
      <SearchBar
        userSelections={userSelections}
        setUserSelections={setUserSelections}
      />
      <ChosenArtist>
        {userSelections &&
          userSelections.map((artist) => {
            return <div key={artist.id}>{artist.name}</div>
          })}
      </ChosenArtist>
    </Container>
  )
}

// for 'ChosenArtist'
// create a button to remove from userSelections

const ChosenArtist = styled.div`
  max-width: 300px;
  margin-top: 1rem;
  color: #fff;
  div {
    padding: 0.1rem 0.3rem;
  }

  @media (max-width: 850px) {
    display: flex;
    text-align: center;
  }
`

const Title = styled.div`
  margin-bottom: 3rem;
  h1 {
    margin: 0;

    /* Add some color variation */
    color: #fff;
    font-size: 4rem;
    span {
      font-weight: 300;
    }
  }
  h3 {
    margin: 0;
    color: #e8f5e9;
    letter-spacing: 2px;
    padding: 0.4rem 0;
    backdrop-filter: grayscale(55);
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  min-width: 350px;
  padding: 0 4.5rem;
  background: rgba(0, 0, 0, 0.1);
  /* backdrop-filter: blur(17px); */
  height: 100%;
  /* width: 100%; */

  @media (max-width: 850px) {
    min-width: 100%;
    display: flex;
    justify-content: center;
    margin-left: 2rem;
  }
`

export default SideBar
