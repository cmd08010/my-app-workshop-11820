import React, { useState } from "react"
import faker from "faker"

const Numbers = () => {
  let [numberArray, setNumberArray] = useState([])
  let [checkbox, setCheckbox] = useState(true)

  const handleCheck = e => {
    checkbox = e.target.checked
    setCheckbox(checkbox)
  }

  const addNumbers = () => {
    let number
    // console.log(Math.floor(Math.random() * 10) / 2)
    if (checkbox === true) {
      number = Math.floor(Math.random() * 10) * 2
    } else {
      number = Math.floor(Math.random() * 10)
    }

    // numberArray.push(number)
    // numberArray.join(<br />)

    setNumberArray([number, ...numberArray])
  }

  const getNumberLength = () => {
    return numberArray.length
  }

  const onSubmit = e => {
    e.preventDefault()
  }

  const numbersRendered = numberArray.map(num => (
    <p className="card-text">{num}</p>
  ))

  return (
    <div>
      <div className="card">
        <p className="card-text">{getNumberLength()} unique numbers</p>
      </div>

      <form onSubmit={onSubmit}>
        <input type="checkbox" checked={checkbox} onChange={handleCheck} /> Is
        Even?
        <div>
          <button type="submit" onClick={addNumbers}>
            Generate Number
          </button>
        </div>
      </form>
      <div className="card">{numbersRendered}</div>
    </div>
  )
}

export default Numbers
