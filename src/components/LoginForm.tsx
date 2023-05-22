import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { socket } from '../socket'

import { setIsAuth, setUser, setUsers, waitUser } from '../redux/actions'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { SERVER_URL } from '../constants'

export const LoginForm = () => {
  const [roomId, setRoomId] = useState('')
  const [userName, setUserName] = useState('')

  const dispatch = useAppDispatch()

  const store = useAppSelector((store) => store.user)
  console.log(`=>store`, store)

  const handleChangeRoomId = (event) => {
    setRoomId(event.target.value)
  }
  const onLogin = () => {
    dispatch(setIsAuth(true))
  }
  const handleChangeUserName = (event) => {
    setUserName(event.target.value)
  }

  const handleSubmit = async () => {
    dispatch(waitUser())

    const obj = {
      roomId,
      userName,
    }

    dispatch(setUser(obj))

    console.log('=>submitObj', obj)
    onLogin()

    // SERVER_URL
    await axios.post('http://localhost:5050/rooms', obj)
    socket.emit('ROOM:JOIN', obj)
    // const { data } = await axios.get(`/rooms/${obj.roomId}`)
    // console.log(`=>data`, data)
    // setSocketUsers(data.users)
  }

  const setSocketUsers = (users) => {
    dispatch(setUsers(users))
    console.log(`=>ROOM:SET_USERS`, users)
  }

  useEffect(() => {
    socket.on('ROOM:SET_USERS', setSocketUsers)
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
      <button disabled={store.isLoading} onClick={handleSubmit}>
        {store.isLoading ? 'Вход...' : 'Войти'}
      </button>
    </>
  )
}
