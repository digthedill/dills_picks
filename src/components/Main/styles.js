import styled from "styled-components"

const WelcomeText = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 6.5rem;
    color: #f4f4f4;
    padding-left: 0.5rem;
    margin-left: 4rem;
  }
  @media (max-width: 1000px) {
    h2 {
      font-size: 5rem;
    }
  }
  @media (max-width: 850px) {
    h2 {
      display: none;
    }
  }
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 850px) {
    display: ${(props) => (props.playlist.length < 1 ? "none" : "block")};
    max-width: 650px;
  }
`

export { WelcomeText, Container }
