import React, { useState } from 'react'




export const Counter = ({ amount }) => {

    const [increase, setIncrease] = useState( amount )

    const handleIncrease = () =>{
        setIncrease(increase + 1)

    }

    const handleDecrease = () =>{
        setIncrease(increase - 1)
    }


    if( increase < 1){
      return setIncrease( 1 )
    }
    

  return (
    <div>              
        <button onClick={ handleDecrease }>-</button>
        {increase}
        {console.log('increase', increase )}
        <button onClick={ handleIncrease }>+</button>
    </div>
  )
}
