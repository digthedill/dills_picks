import { useState, useEffect } from "react"
import styled from "styled-components"
import axios from "axios"
import { Container, Wrapper, SearchContainer } from "./styles/app-styles"
import useInitializeToken from "./hooks/useInitializeToken"

const App = () => {
  const [searchInput, setSearch] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const token = useInitializeToken()

  useEffect(() => {
    axios
      .get("https://api.spotify.com/v1/search", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        params: {
          q: searchInput,
          type: "artist",
          limit: 6,
        },
      })
      .then((response) => {
        setSearchResults(response.data.artists.items)
      })
  }, [searchInput])

  return (
    <Container>
      <Wrapper>
        <SearchResults>
          {searchResults &&
            searchResults.map((item) => {
              return (
                <div key={item.id}>
                  <h2>{item.name}</h2>
                  {item.images[0] && (
                    <img
                      src={item.images[0].url}
                      alt={item.name}
                      style={{
                        width: "300px",
                        height: "300px",
                        objectFit: "cover",
                      }}
                    />
                  )}
                </div>
              )
            })}
        </SearchResults>

        <SearchContainer>
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Elvis"
          />
          <button>Search</button>
        </SearchContainer>
      </Wrapper>
    </Container>
  )
}

const SearchResults = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 900px;
  gap: 0.5rem;
  h2 {
    font-weight: 600;
    letter-spacing: 0.1rem;
  }
`

export default App
