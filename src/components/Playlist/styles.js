import styled from "styled-components"

const Container = styled.div`
  margin: 3rem 0;
  overflow-y: auto;

  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: fit-content;
    /* 
  height: 500px;
  overflow-y: scroll; */
  }
`

export { Container }
