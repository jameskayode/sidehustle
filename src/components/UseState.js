import React, {useState} from 'react'

export const UseState = () => {
    const [count, setCount] = useState(0)
    console.log('State render')
  return (
    <div>
        <button onClick={()=>setCount(count + 1)}>Counter- {count}</button>
    </div>
  )
}
