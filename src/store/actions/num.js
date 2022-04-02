export function alterNumMinimo(newNumber) {
  return {
    type: `ALTER_NUM_MINIMUM`,
    payload: newNumber
  }
}

export function alterNumMaximo(newNumber) {
  return {
    type: `ALTER_NUM_MAXIMUM`,
    payload: newNumber
  }
}