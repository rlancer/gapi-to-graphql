const upperFirst = (str) => `${str[0].toUpperCase()}${str.substring(1)}`

const keyMap = (literal, valueOperator, keyTransform) => {
  if (!literal)
    return null

  const r = {}
  Object.keys(literal).forEach(key => {
    const value = valueOperator(key, literal[key])

    if (value !== null)
      r[keyTransform ? keyTransform(key) : key] = valueOperator(key, literal[key])
  })
  return r
}


export {upperFirst, keyMap}