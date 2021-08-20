import styled from "styled-components"
const Container = styled.div`
  width: 85%;
  margin: 2rem 0;
  display: flex;
  justify-content: space-between;
`

const Button = styled.button`
  padding: 0.4rem 1rem;
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

  @media (max-width: 440px) {
    font-size: 1rem;
  }
`

export { Container, Button }
