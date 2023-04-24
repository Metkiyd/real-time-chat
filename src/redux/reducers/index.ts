import { SET_USER, WAIT_USER } from '../../constants'

const initialState = {
  user: null,
  isLoading: false,
}
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state
  }
}
