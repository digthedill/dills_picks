import axios from "axios"
import { useState } from "react"
import useToken from "../hooks/useToken"
import styled from "styled-components"
import Autocomplete from "react-autocomplete"
import { Button } from "../styles/tools"

const SearchBar = ({ userSelections, setUserSelections }) => {
  // state
  const [searchInput, setSearch] = useState("")
  const [searchResults, setSearchResults] = useState([])

  const [error, setError] = useState("")
  const token = useToken()

  /**TODO
   *
   *
   *  style more appropriately
   *  work on exact matches
   */

  // created function to refine search parameters based on query
  // Or additional params yet to be coded like "min_tempo"
  const getSpotifyObject = (token, query, cb) => {
    axios
      .get("https://api.spotify.com/v1/search", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        params: {
          q: query,
          type: "artist,track,album",
          limit: 5,
        },
      })
      .then((response) => {
        cb(response.data.artists.items)
      })
  }

  const handleSearch = (e) => {
    setSearch(e.target.value)
    if (searchInput.length > 1) {
      getSpotifyObject(token, searchInput, setSearchResults)
    }
  }

  const storeSelections = (e) => {
    e.preventDefault()
    const selection = e.target[0].value
    const object = searchResults.find((item) => item.name === selection)
    if (!object) {
      setError(
        `Sorry, it looks like we couldn't find ${
          searchInput ? searchInput : "what you were looking for"
        }`
      )
    } else {
      if (userSelections.find((item) => item.id === object.id)) {
        setError("You already added " + object.name)
      } else {
        setError("")
        setUserSelections((prev) => [...prev, object])
        setSearch("")
      }
    }
  }

  return (
    <div>
      <Container>
        <SearchContainer
          onSubmit={storeSelections}
          className="form_group_field"
        >
          <Autocomplete
            type="text"
            className="form_field"
            getItemValue={(item) => item.name}
            onSelect={(val) => setSearch(val)}
            value={searchInput}
            onChange={(e) => handleSearch(e)}
            items={searchResults}
            inputProps={{
              placeholder: "Choose Artist",
            }}
            open={searchInput.length > 1 ? true : false} //setup support for click away or ESC char
            menuStyle={{
              borderRadius: "3px",
              boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)",
              background: "rgba(255, 255, 255, 0.9)",
              margin: "2px 0",
              fontSize: "90%",
              position: "fixed",
              overflow: "auto",
              maxHeight: "50%",
            }}
            renderItem={(item, isHighlighted) => {
              return (
                <div
                  key={item.id}
                  style={{
                    background: isHighlighted ? "#9fa8da" : "white",
                    color: isHighlighted ? "#fff" : "#333",
                    padding: "0.8rem 1rem",
                  }}
                >
                  {item.name}
                </div>
              )
            }}
          />
          <label htmlFor="text" className="form_label">
            Choose Artist
          </label>
        </SearchContainer>
        <Button type="submit">Search</Button>
      </Container>
      <p style={{ color: "red", maxWidth: "300px", margin: "1rem 0" }}>
        {error}
      </p>
    </div>
  )
}

const Container = styled.div`
  display: flex;
  @media (max-width: 500px) {
    display: block;
  }
`
const SearchContainer = styled.form`
  display: flex;
  position: relative;

  &:focus-within label {
    position: absolute;
    top: -30px;
    color: #e8eaf6;
    font-size: 16px;
  }
  &:focus-within button {
    border: 1px solid #e8eaf6;
  }

  input {
    /* padding: 0.1rem 0; */
    outline: none;
    border: none;
    background: none;
    border-bottom: 1px solid #fff;
    font-size: 1.5rem;
    font-weight: 600;
    color: #fff;
    width: 230px;
    margin-right: 0.5rem;
    &::placeholder {
      color: transparent;
    }
    &:focus {
      border-bottom: 1px solid #e8eaf6;
    }
  }

  label {
    position: absolute;
    transform: translate(0) scale(1);
    transform-origin: top left;
    font-size: 1.5rem;
    font-weight: 300;
    color: #f9f9f9;
    z-index: 1;
    transition: all 0.3s ease-in-out;
    pointer-events: none;
  }

  @media (max-width: 550px) {
    input {
      padding: 0.4rem 0;
      font-size: 1rem;
      margin-bottom: 0.6rem;
    }
  }
`

export default SearchBar
