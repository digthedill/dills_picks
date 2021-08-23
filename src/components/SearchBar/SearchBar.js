import { useState, useEffect } from "react"
import useToken from "../../hooks/useToken"

import Autocomplete from "../Autocomplete"
import getPlaylistObject from "../../utils/getPlaylistObject"

import { Container, SearchContainer } from "./styles"

const SearchBar = ({ userSelections, setUserSelections }) => {
  const [searchInput, setSearchInput] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [currentFocus, setCurrentFocus] = useState(-1)
  const [error, setError] = useState("")
  const token = useToken()

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError("")
      }, 6000)
    }
  }, [error])

  const keyboardF = (e) => {
    // might have to bring in display
    if (searchResults.length > 0) {
      if (e.key === "ArrowUp" && searchResults[currentFocus - 1]) {
        setCurrentFocus(currentFocus - 1)
      } else if (e.key === "ArrowDown" && searchResults[currentFocus + 1]) {
        setCurrentFocus(currentFocus + 1)
      }
    }
  }

  const fireEnterKey = (e) => {
    if (e.key === "Enter") {
      const song = searchResults[currentFocus].name
      storeSelections(song)
    }
  }

  const handleInputChange = (e) => {
    setSearchInput(e.target.value)
    if (searchInput.length > 1) {
      getPlaylistObject(token, searchInput, setSearchResults)
    }
  }

  const storeSelections = (song) => {
    const object = searchResults.find((item) => item.name === song)
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
        setSearchInput("")
      }
    }
  }

  return (
    <>
      <p style={{ color: "red", maxWidth: "300px", marginBottom: "3rem" }}>
        {error}
      </p>
      <Container>
        <SearchContainer
          className="form_group_field"
          searchInput={searchInput}
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="text" className="form_label">
            Choose Artist
          </label>
          <input
            type="text"
            value={searchInput}
            onChange={handleInputChange}
            onKeyDown={(e) => keyboardF(e)}
            onKeyPress={(e) => fireEnterKey(e)}
          />
        </SearchContainer>
      </Container>
      <Autocomplete
        searchResults={searchResults}
        setSearchResults={setSearchResults}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        storeSelections={storeSelections}
        currentFocus={currentFocus}
        setCurrentFocus={setCurrentFocus}
      />
    </>
  )
}

export default SearchBar
