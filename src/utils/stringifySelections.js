const stringifySelections = (arr) => {
  const ids = arr.map((item) => item.id)
  let str = ""
  for (let i = 0; i < ids.length; i++) {
    let item = ids[i]
    if (i !== ids.length - 1) {
      str += item + ","
    } else {
      str += item
    }
  }
  return str
}

export default stringifySelections
