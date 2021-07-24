const clearSpaces = (input) => {
  const space = /\s/g
  return input.replace(space, "+")
}

export default clearSpaces
