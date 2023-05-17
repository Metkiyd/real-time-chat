import {
  IS_AUTH,
  SET_USER,
  WAIT_USER,
  SET_USERS,
  SET_MESSAGES,
} from '../../constants'

const initialState = {
  isAuth: false,
  user: null,
  isLoading: false,
  users: [],
  messages: [],
}
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_AUTH: {
      return {
        ...state,
        isAuth: action.boolean,
      }
    }
    case SET_USER: {
      return {
        ...state,
        user: action.user,
        isLoading: false,
      }
    }
    case WAIT_USER: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case SET_USERS: {
      return {
        ...state,
        users: action.users,
      }
    }
    case SET_MESSAGES: {
      return {
        ...state,
        messages: action.payload,
      }
    }
    default:
      return state
  }
}
