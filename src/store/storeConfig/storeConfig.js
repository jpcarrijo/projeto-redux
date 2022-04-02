import { createStore, combineReducers } from 'redux';

const reducers = combineReducers({
  num: (state, action) => {
    switch (action.type) {
      case 'ALTER_NUM_MINIMUM':
        return {
          ...state,
          min: action.payload
        }
      case 'ALTER_NUM_MAXIMUM':
        return {
          ...state,
          max: action.payload
        }
      default:
        return {
          min: 5,
          max: 35
        }
    }
  }
})

const storeConfig = () => {
  return createStore(reducers)
};

export default storeConfig;