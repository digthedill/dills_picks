import { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import {
  BsFillPlayFill as PlayIcon,
  BsFillPauseFill as PauseIcon,
} from "react-icons/bs"

const PlaylistTrack = ({ children, currentlyPlaying, setCurrentlyPlaying }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioPlayer = useRef()

  //song preview object
  const song = children
  const albumArtwork = song.album.images[1].url //med size
  const trackName = song.name
  const artist = song.artists[0].name
  const previewUrl = song.preview_url
  const id = song.id

  useEffect(() => {
    if (currentlyPlaying !== id) setIsPlaying(false)
  }, [currentlyPlaying, id])

  const playPreview = () => {
    if (previewUrl) {
      setIsPlaying(true)
      setCurrentlyPlaying(id)
      audioPlayer.current.play()
      if (isPlaying) {
        audioPlayer.current.pause()
        setIsPlaying(false)
      }
    } else return
    return
  }

  return (
    <Container>
      <Wrapper>
        <AudioPlayerStyles onClick={playPreview} url={previewUrl}>
          <div>
            <audio
              src={previewUrl}
              ref={audioPlayer}
              preload="metadata"
              id={id}
            />
            {isPlaying ? (
              <PauseIcon className="pauseIcon" />
            ) : (
              <PlayIcon className="playIcon" />
            )}
          </div>
          <img
            src={albumArtwork}
            alt={trackName + " img"}
            className="thumbnail-preview"
            width="150"
            height="150"
          />
        </AudioPlayerStyles>
        <div>
          <h5>{trackName}</h5>
          <p>{artist}</p>
        </div>
      </Wrapper>
    </Container>
  )
}
const AudioPlayerStyles = styled.div`
  cursor: ${({ url }) => (url ? "pointer" : "auto")};
  position: relative;
  margin: 0 1rem;

  .thumbnail-preview {
    z-index: 1;
    box-shadow: 0 7px 7px rgba(0, 0, 0, 0.7);
  }

  div {
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    background: rgba(255, 255, 255, 0.3);
  }
  .playIcon,
  .pauseIcon {
    display: ${({ url }) => (url ? "block" : "none")};
    color: #000;
    width: 70px;
    height: 70px;
    z-index: 20;
  }
`

const Wrapper = styled.div`
  display: flex;
  align-items: start;
  div {
    color: #fff;
    h5 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1rem;
    }

    @media (max-width: 850px) {
      h5 {
        font-size: 1rem;
      }
      p {
        font-size: 0.7rem;
      }
    }
  }
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  width: 85%;
  border-radius: 5px;
`

export default PlaylistTrack
