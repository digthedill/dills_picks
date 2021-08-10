import SearchBar from "./SearchBar"
import { render, screen } from "@testing-library/react"

it("renders serach bar component", () => {
  render(<SearchBar />)
})

// handle error cases by supplying a range of inputs
