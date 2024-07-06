import React, {useState} from 'react'
import './index.css'

const ShowHide = () => {
  const [showFirstName, setShowFirstName] = useState(false)
  const [showLastName, setShowLastName] = useState(false)

  const toggleFirstName = () => {
    setShowFirstName(prevState => !prevState)
  }

  const toggleLastName = () => {
    setShowLastName(prevState => !prevState)
  }

  return (
    <div className="show-hide-container">
      <h1>Show/Hide</h1>
      <div className="buttons-container">
        <button onClick={toggleFirstName}>Show/Hide Firstname</button>
        <button onClick={toggleLastName}>Show/Hide Lastname</button>
      </div>
      <div className="names-container">
        {showFirstName && <p>Joe</p>}
        {showLastName && <p>Jonas</p>}
      </div>
    </div>
  )
}

export default ShowHide
