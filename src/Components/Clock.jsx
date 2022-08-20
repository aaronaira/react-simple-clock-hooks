import { useState, useEffect } from 'react'
import AnalogClock from './AnalogClock.jsx'

export default function Clock () {
  const defaultUser = {
    date: new Date(),
    age: 0,
    name: 'Aarón',
    secondname: 'Aira García'
  }

  const [user, setUser] = useState(defaultUser)

  useEffect(() => {
    const timerID = setInterval(() => {
      setUser({
        ...user,
        age: ++user.age,
        date: new Date()
      })
    }, 1000)

    return () => {
      clearInterval(timerID)
    }
  }, [user])

  return (
        <div>
            <AnalogClock></AnalogClock>
            <h2>Hora Actual: {user.date.toLocaleTimeString()}
            </h2>
            <h3>{user.name} {user.secondname}</h3>
            <h1>Edad: {user.age}</h1>
        </div>
  )
}
