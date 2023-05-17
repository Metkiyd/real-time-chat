import {
  IS_AUTH,
  SET_USER,
  WAIT_USER,
  SET_USERS,
  SET_MESSAGES,
} from '../../constants'
export const setIsAuth = (boolean) => ({ type: IS_AUTH, boolean })
export const setUser = (user) => ({ type: SET_USER, user })
export const waitUser = () => ({ type: WAIT_USER })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setMessages = () => ({ type: SET_MESSAGES })
