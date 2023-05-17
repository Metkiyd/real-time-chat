import React from 'react'

import { LoginForm } from './components/LoginForm'
import Chat from './components/Chat'

import { socket } from './socket'
import { useDispatch, useSelector } from 'react-redux'
import { setIsAuth } from './redux/actions'

const App = () => {
  const { isAuth } = useSelector((store) => store.user)
  console.log(`=>isAuth`, isAuth)
  return <div>{!isAuth ? <LoginForm /> : <Chat />}</div>
}

export default App
