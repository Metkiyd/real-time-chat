import React from 'react'

import { LoginForm } from './components/LoginForm'

import { socket } from './socket'

const App = () => {
  return (
    <div>
      <LoginForm />
    </div>
  )
}

export default App
