import React from 'react'

import { LoginForm } from './components/LoginForm'
import { Chat } from './components/Chat'

import { useAppSelector } from './redux/hooks'
import { socket } from './socket'

const App = () => {
  const { isAuth } = useAppSelector((store) => store.user)
  return <div>{!isAuth ? <LoginForm /> : <Chat />}</div>
}

export default App
