/**
 * Traverse an objects keys along a designated path
 *
 * @param {object} obj The object to be traversed
 * @param {Array<string>} traversalKeyPath The path of keys to burrow into
 * the object
 *
 * @return {*} The item inside obj at the specified path, or undefined
 * if such an path does not exist inside obj.
 */
export function traverseObject(obj, traversalKeyPath) {
  if (!obj || !traversalKeyPath) return undefined

  let o = obj
  for (let key of traversalKeyPath) {
    if (!o) return undefined
    o = o[key]
  }
  return o
}

export function capitalize(s) {
  if (!s) return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}
