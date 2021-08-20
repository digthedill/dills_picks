import styled from "styled-components"

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
    color: rgba(0, 0, 0, 0.8);
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

export { Container, Wrapper, AudioPlayerStyles }
