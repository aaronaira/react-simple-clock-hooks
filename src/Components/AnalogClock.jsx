import './clock.css'
import { useRef, useEffect, useState } from 'react'

const AnalogClock = () => {
  const [time, setTime] = useState(new Date())

  const hoursElem = useRef(null)
  const minutesElem = useRef(null)
  const secondsElem = useRef(null)

  const seconds = (360 / 100) * ((time.getSeconds() / 60) * 100)
  const minutes = (360 / 100) * ((time.getMinutes() / 60) * 100)
  const hours = (360 / 100) * ((time.getHours() / 12) * 100)

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    secondsElem.current.style = `transform: rotate(${seconds}deg)`
    minutesElem.current.style = `transform: rotate(${minutes}deg)`
    hoursElem.current.style = `transform: rotate(${hours}deg)`

    return () => {
      clearInterval(timer)
    }
  })

  return (
    <div className="clock">
        <div className="quarters">
            <div className="point"></div>
            <div ref={secondsElem} className="time-second"></div>
            <div ref={minutesElem} className="time-minute"></div>
            <div ref={hoursElem} className="time-hour"></div>
            <div className="time-12">12</div>
            <div className="time-3">3</div>
            <div className="time-6">6</div>
            <div className="time-9">9</div>
        </div>
    </div>
  )
}

export default AnalogClock
