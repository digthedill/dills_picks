import { useState, useEffect } from "react"
import useToken from "../../hooks/useToken"

import { AiOutlineArrowRight as ArrowIcon } from "react-icons/ai"
import Autocomplete from "../Autocomplete"
import getPlaylistObject from "../../utils/getPlaylistObject"

import { Container, SearchContainer, Button } from "./styles"

const SearchBar = ({ userSelections, setUserSelections }) => {
  const [searchInput, setSearchInput] = useState("")
  const [searchResults, setSearchResults] = useState([])

  const [error, setError] = useState("")
  const token = useToken()

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError("")
      }, 6000)
    }
  }, [error])

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
      </p>{" "}
      <Container>
        <SearchContainer
          className="form_group_field"
          searchInput={searchInput}
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="text" className="form_label">
            Choose Artist
          </label>
          <input type="text" value={searchInput} onChange={handleInputChange} />
          {/* <Button type="submit">
            <ArrowIcon />
  </Button> */}
        </SearchContainer>
      </Container>
      <Autocomplete
        searchResults={searchResults}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        storeSelections={storeSelections}
      />
    </>
  )
}

export default SearchBar
