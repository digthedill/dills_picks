import styled from "styled-components"

const SearchContainer = styled.div`
  display: flex;
  font-size: 1rem;

  input {
    height: 30px;
    padding: 0.2rem 0.4rem;
    outline: none;
    border: none;
    background: #f4f4f4;
    color: #333;
    border-radius: 3px;
    font-size: 1rem;
  }
  button {
    margin-left: 0.2rem;
    outline: none;
    border: none;
    background: #5c6bc0;
    border-radius: 3px;
    color: #fff;
    font-size: 1rem;
  }
`

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 3.4rem;
  }
`

const Container = styled.main`
  color: #333;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background: #d53369; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #cbad6d,
    #d53369
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #cbad6d,
    #d53369
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`

export { SearchContainer, Wrapper, Container }
