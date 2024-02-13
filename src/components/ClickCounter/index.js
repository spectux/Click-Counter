import { useState } from 'react'
import './index.css'

const ClickCounter = () => {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <div className="click-counter-container">
      <h1>The Button has been clicked {count} times</h1>
      <p>Click the button to increase the count</p>
      <button className="click-me-button" onClick={incrementCount}>
        Click Me!
      </button>
    </div>
  )
}

export default ClickCounter

