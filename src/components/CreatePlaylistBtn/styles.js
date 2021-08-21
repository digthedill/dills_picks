import styled from "styled-components"

const Button = styled.button`
  border: 1px solid #fff;
  outline: none;
  border: none;
  background: none;
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

export { Button }
