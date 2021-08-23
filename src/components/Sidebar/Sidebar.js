import { Container, Title, ChosenArtist } from "./styles"

import CreatePlaylistBtn from "../CreatePlaylistBtn"
import SearchBar from "../SearchBar"

const Sidebar = ({ userSelections, setUserSelections, setPlaylist }) => {
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
      <CreatePlaylistBtn
        userSelections={userSelections}
        setPlaylist={setPlaylist}
      />
    </Container>
  )
}

export default Sidebar
