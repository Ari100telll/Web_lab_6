import { createStore } from "redux";

const title = (state = "", action) => {
  if (action.type === "CHANGE_LIST_TITLE") {
    return action.title;
  } else {
    return state;
  }
};

const list = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      let Flag = state.reduce((isInFlag, current) => {
        if (isInFlag) {
          return isInFlag;
        } else {
          if (action.element.id === current.element.id) {
            current.count += 1;
            isInFlag = true;
          } else return isInFlag;
        }
      }, false);
      if (!Flag) {
        return state.concat([{ element: action.element, count: 1 }]);
      }
    case "REMOVE_ITEM":
      let Flag = state.reduce((isNeedDelet, current) => {
        if (isNeedDelet) {
          return isNeedDelet;
        } else {
          if (action.id === current.element.id) {
            current.count -= 1;
            if (current.count === 0) {
              isNeedDelet = true;
            }
          } else return isNeedDelet;
        }
      }, false);
      if (isNeedDelet) {
        return state.filter((item) =>
          action.id === item.element.id ? false : true
        );
      }
    case "GET_ITEM":
      return state.filter((item) =>
        action.id === item.element.id ? true : false
      );
    case "GET_ITEMS":
      return state;
    default:
      return state;
  }
};

const listManager = (state = {}, action) => {
  return {
    title: title(state.title, action),
    list: list(state.list, action),
  };
};

export const store = createStore(listManager);
