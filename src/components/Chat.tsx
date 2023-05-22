import React, { useState } from 'react'
import { useAppSelector } from '../redux/hooks'

export const Chat = () => {
  const store = useAppSelector((store) => store.user)
  console.log(`=>storeInChat`, store)

  const { users } = useAppSelector((store) => store.user)
  console.log(`=>usersStateInChat`, users)
  const [message, setMessage] = useState('')
  return (
    <div>
      <div>
        Users block
        <p>{users.length} участников</p>
        <ul>
          {users.map((name, index) => (
            <li key={name + index}>{name}</li>
          ))}
        </ul>
      </div>
      <div>
        Message block
        <div>
          Messages
          <div>
            Message
            <div>UserName</div>
            <p>Text</p>
          </div>
        </div>
      </div>
      <form>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button>send</button>
      </form>
    </div>
  )
}
