import { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import useOutsideClick from "../../hooks/useOutsideClick"

const Autocomplete = ({
  searchResults,
  setSearchResults,
  searchInput,
  setSearchInput,
  storeSelections,
  setCurrentFocus,
  currentFocus,
}) => {
  const [display, setDisplay] = useState(false)
  const ref = useRef()

  // handle autocomplete display off
  useOutsideClick(ref, () => {
    if (display) setDisplay(false)
  })
  useEffect(() => {
    if (searchResults.length > 1 && !!searchInput) {
      setDisplay(true)
    } else {
      setDisplay(false)
    }
  }, [searchResults, searchInput, setSearchResults])

  const hoverSelection = (e, hover, idx = null) => {
    setCurrentFocus(idx)

    e.target.style.background = hover ? "#757de8" : "#fff"
    e.target.style.color = hover ? "#fff" : "#000"
  }

  const setArtist = (song) => {
    setSearchInput(song)
    setDisplay(false)
    storeSelections(song)
  }

  if (display) {
    return (
      <Container ref={ref}>
        {searchResults.map((song, i) => {
          return (
            <SongSuggestion
              key={song.id}
              onMouseEnter={(e) => hoverSelection(e, true, i)}
              onMouseLeave={(e) => hoverSelection(e, false)}
              className="song-suggestion"
              onClick={() => setArtist(song.name)}
              isCurrent={i === currentFocus}
            >
              {song.images[2] ? (
                <img
                  src={song.images[2].url}
                  alt={song.name}
                  width={40}
                  height={40}
                />
              ) : (
                <img
                  src="https://e1.pngegg.com/pngimages/230/166/png-clipart-symbolize-music-note-logo-thumbnail.png"
                  alt={song.name}
                  width={50}
                  height={50}
                />
              )}
              <span>{song.name}</span>
            </SongSuggestion>
          )
        })}
      </Container>
    )
  }

  return null
}

const SongSuggestion = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  color: ${({ isCurrent }) => (isCurrent ? "#fff" : "#000")};
  background: ${({ isCurrent }) => (isCurrent ? "#757de8" : "#fff")};
  span {
    margin-left: 0.8rem;
    color: #000;
  }
`

const Container = styled.div`
  width: 90%;
  margin-top: 0.3rem;
  background: #fff;

  @media (max-width: 850px) {
    width: 75%;
  }
`

export default Autocomplete
