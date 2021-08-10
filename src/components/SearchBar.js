import axios from "axios"
import { useState } from "react"
import useToken from "../hooks/useToken"
import styled from "styled-components"
import Autocomplete from "react-autocomplete"

const SearchBar = ({ userSelections, setUserSelections }) => {
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
      <SearchContainer onSubmit={storeSelections} className="form_group_field">
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
        <button type="submit">Search</button>
      </SearchContainer>
      <p style={{ color: "red", maxWidth: "300px", margin: "1rem 0" }}>
        {error}
      </p>
    </div>
  )
}

const SearchContainer = styled.form`
  display: flex;
  max-width: 200px;
  position: relative;

  &:focus-within label {
    position: absolute;
    top: -30px;
    color: #e8eaf6;
    font-size: 16px;
  }
  &:focus-within button {
    color: #e8eaf6;
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

  button {
    margin-left: 0.2rem;
    padding: 0 0.4rem;
    outline: none;
    border: 1px solid #fff;
    background: rgba(255, 255, 255, 0.09);
    /* box-shadow: 2px 2px #fff; */

    border-radius: 5px;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
      background: #fff;
      color: #000;
      box-shadow: 6px 3px 3px #000;
    }
  }

  @media (max-width: 440px) {
    input,
    button {
      /* padding: 0.1rem 0.1rem; */
      font-size: 1rem;
    }
    input {
      padding: 0.4rem 0;
    }
  }
`

export default SearchBar
