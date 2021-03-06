import styled from "styled-components"

const ChosenArtist = styled.div`
  max-width: 300px;
  margin-top: 1rem;
  color: #fff;
  div {
    padding: 0.1rem 0.3rem;
  }

  @media (max-width: 850px) {
    display: flex;
    text-align: center;
  }
`

const Title = styled.div`
  margin-bottom: 3rem;
  h1 {
    margin: 0;
    color: #fff;
    font-size: 4rem;
    span {
      font-weight: 300;
    }
  }
  h3 {
    margin: 0;
    color: #e8f5e9;
    letter-spacing: 2px;
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 3rem;
    }
  }
`

const Container = styled.div`
  padding: 270px 2rem 0 2rem;
  background: rgba(0, 0, 0, 0.3);

  @media (max-width: 850px) {
    background: none;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* left: 50%;
    transform: translate(-50%, 0); */
    padding: 50px 0 0 0;
  }
`

export { Container, ChosenArtist, Title }
