import { useState } from 'react'
import Button from './Button'
import History from './History'

const LeftRightCounter = () => {

  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })
  const [allClicks, setAllClicks] = useState([])
 
  const handleLeftClick = () => {
    setAllClicks(allClicks.concat('L'))
    // concat luo uuden taulukon, johon uusi alkio lisätty
    setClicks({...clicks, left: clicks.left + 1})
  }

  const handleRightClick = () => {
    setAllClicks(allClicks.concat('R'))
    setClicks({...clicks, right: clicks.right + 1})
  }

  return (
    <div>
      <div>
        {clicks.left}
        <Button handleClick={handleLeftClick} text={"left"} />
        <Button handleClick={handleRightClick} text={"right"} />
        {clicks.right}
        <History allClicks={allClicks} />
      </div>
    </div>
  )
}

export default LeftRightCounter