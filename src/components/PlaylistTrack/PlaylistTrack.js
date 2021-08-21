import { useState, useRef, useEffect } from "react"
import { Container, Wrapper, AudioPlayerStyles } from "./styles"
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
          />
        </AudioPlayerStyles>
        <div className="track-info">
          <h5>{trackName}</h5>
          <p>{artist}</p>
        </div>
      </Wrapper>
    </Container>
  )
}

export default PlaylistTrack
