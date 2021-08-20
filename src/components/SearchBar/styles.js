import styled from "styled-components"

const Container = styled.div`
  display: flex;
  @media (max-width: 500px) {
    display: block;
  }
`
const SearchContainer = styled.form`
  display: flex;
  position: relative;

  &:focus-within label {
    position: absolute;
    top: -30px;
    color: #e8eaf6;
    font-size: 16px;
  }

  input {
    /* padding: 0.1rem 0; */
    outline: none;
    border: none;
    background: none;
    border-bottom: 1px solid #fff;
    font-size: 1.5rem;
    font-weight: 600;
    color: #fff;
    width: 230px;
    margin-right: 0.5rem;
    &::placeholder {
      color: transparent;
    }
    &:focus {
      border-bottom: 1px solid #e8eaf6;
    }
  }

  label {
    position: absolute;
    transform: translate(0) scale(1);
    transform-origin: top left;
    font-size: ${({ searchInput }) =>
      !!searchInput.length ? "16px" : "1.5rem"};
    font-weight: 300;
    color: ${({ searchInput }) =>
      !!searchInput.length ? "#e8eaf6" : "#f9f9f9"};
    z-index: 1;
    transition: all 0.3s ease-in-out;
    pointer-events: none;
    top: ${({ searchInput }) => (!!searchInput.length ? "-30px" : "0")};
  }

  @media (max-width: 550px) {
    input {
      padding: 0.4rem 0;
      font-size: 1rem;
      margin-bottom: 0.6rem;
    }
  }
`

const Button = styled.button`
  padding: 0.4rem 1rem;
  outline: none;
  border: none;
  background: none;

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

export { SearchContainer, Container, Button }
