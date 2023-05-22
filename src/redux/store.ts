import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers, createStore } from 'redux'

import { userReducer } from './reducers'

export const rootReducer = combineReducers({
  user: userReducer,
})

export const store = createStore(rootReducer, composeWithDevTools())
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
