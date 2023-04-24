import React, { useEffect, useState } from 'react'

import { socket } from '../socket'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../redux/actions'

export const LoginForm = () => {
  const [roomId, setRoomId] = useState('')
  const [userName, setUserName] = useState('')

  const dispatch = useDispatch()

  const store = useSelector((store) => store)
  console.log(`=>store`, store)

  const handleChangeRoomId = (event) => {
    setRoomId(event.target.value)
  }

  const handleChangeUserName = (event) => {
    setUserName(event.target.value)
  }

  const handleSubmit = async () => {
    const obj = {
      roomId,
      userName,
    }
    dispatch(setUser(obj))

    console.log('=>obj', obj)
    await axios.post('http://localhost:5050/rooms', obj)
    socket.emit('ROOM:JOIN', obj)
  }

  useEffect(() => {
    socket.on('ROOM:JOINED', (users) => {
      console.log(`=>New user`, users)
    })
  }, [])

  return (
    <>
      <input
        type={'text'}
        placeholder={'Room ID'}
        value={roomId}
        onChange={handleChangeRoomId}
      />
      <input
        type={'text'}
        placeholder={'Ваше Имя'}
        value={userName}
        onChange={handleChangeUserName}
      />
      <button onClick={handleSubmit}>Войти</button>
    </>
  )
}
