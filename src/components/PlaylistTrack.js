import { useState, useEffect } from "react"
import styled from "styled-components"
import {
  AiOutlinePlayCircle as PlayIcon,
  AiFillPauseCircle as PauseIcon,
} from "react-icons/ai"

const PlaylistTrack = ({ children }) => {
  const [played, setPlayed] = useState(false)

  const song = children
  const albumArtwork = song.album.images[1].url //large size
  const trackName = song.name
  const artist = song.artists[0].name
  const previewUrl = song.preview_url

  let audioEle
  if (previewUrl) {
    audioEle = new Audio(previewUrl)
  } else {
    audioEle = null
  }

  useEffect(() => {
    // function for preventing multiple previews to play at once
    document.addEventListener(
      "play",
      (e) => {
        const audios = document.getElementsByTagName("audio")
        for (let i = 0; i < audios.length; i++) {
          if (audios[i] !== e.target) {
            audios[i].pause()
          }
        }
      },
      true
    )
  }, [])

  return (
    <Container>
      <Wrapper>
        <AudioPlayer>
          <div>
            {played ? (
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
        </AudioPlayer>
        <div>
          <h5>{trackName}</h5>
          <p>{artist}</p>
        </div>
      </Wrapper>
    </Container>
  )
}
const AudioPlayer = styled.div`
  position: relative;

  .thumbnail-preview {
    z-index: 1;
  }
  div {
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
  }
  .playIcon,
  .pauseIcon {
    width: 100px;
    height: 100px;
    color: #f4f4f4;
    z-index: 20;
  }
`

const Wrapper = styled.div`
  display: flex;
  align-items: start;
  div {
    margin-left: 0.4rem;
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
