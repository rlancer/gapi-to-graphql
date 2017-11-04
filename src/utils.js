const upperFirst = (str) => `${str[0].toUpperCase()}${str.substring(1)}`

const keyMap = (literal, valueOperator, keyTransform) => {
  if (!literal)
    return null

  const r = {}
  keys(literal).forEach(key => {
    const value = valueOperator(key, literal[key])

    if (value !== null)
      r[keyTransform ? keyTransform(key) : key] = valueOperator(key, literal[key])
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