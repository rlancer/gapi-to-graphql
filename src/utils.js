const upperFirst = (str) => `${str[0].toUpperCase()}${str.substring(1)}`

const keyMap = (literal, valueOperator, keyTransform) => {
  if (!literal)
    return null

  const r = {}

  let index = 0
  keys(literal).forEach(key => {
    const value = valueOperator(key, literal[key], index++)

    if (value !== null)
      r[keyTransform ? keyTransform(key) : key] = value
  })
  return r
}

const keys = obj => {
  return Object.keys(obj || {})
}
const values = obj => {
  return Object.values(obj || {})
}
export {upperFirst, keyMap, keys, values}