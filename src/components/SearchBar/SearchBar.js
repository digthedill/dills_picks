import { useState } from "react"
import useToken from "../../hooks/useToken"

import getPlaylistObject from "../../utils/getPlaylistObject"

import Autocomplete from "react-autocomplete"
import { Container, SearchContainer, Button } from "./styles"
import { AiOutlineArrowRight as ArrowIcon } from "react-icons/ai"

/**
 * style more appropriately
 *
 * created function to refine search parameters based on query
 * Or additional params yet to be coded like "min_tempo"
 *
 * Fix autocomplete -> use a different component
 */

const SearchBar = ({ userSelections, setUserSelections }) => {
  const [searchInput, setSearch] = useState("")
  const [searchResults, setSearchResults] = useState([])

  const [error, setError] = useState("")
  const token = useToken()

  const handleSearch = (e) => {
    setSearch(e.target.value)
    if (searchInput.length > 1) {
      getPlaylistObject(token, searchInput, setSearchResults)
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

        <Button type="submit">
          <ArrowIcon />
        </Button>
      </Container>
      <p style={{ color: "red", maxWidth: "300px", margin: "1rem 0" }}>
        {error}
      </p>
    </div>
  )
}

export default SearchBar
