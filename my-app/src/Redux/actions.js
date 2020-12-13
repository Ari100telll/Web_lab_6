export const addItem = (e) => {
  return {
    type: ADD_ITEM,
    element: e
  }
}

export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    id: id
  }
}
export const getItem = (id) => {
  return {
    type: GET_ITEM,
    id: id
  }
}

export const getItems = () => {
  return {
    type: GET_ITEMS
  }
}

