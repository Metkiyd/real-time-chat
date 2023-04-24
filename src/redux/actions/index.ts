import { SET_USER, WAIT_USER } from '../../constants'

export const setUser = (user) => ({ type: SET_USER, user })
export const waitUser = () => ({ type: WAIT_USER })
