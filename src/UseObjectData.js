
import React,{useState} from 'react'

const Initname={
    name:"james",
    name2:"JOy",
}

export const UseObjectData = () => {
const [person, setPerson] = useState(Initname)

const changeName=()=>{
    person.name="JOseph"
    person.name2="OYinoluwa"
    setPerson=(person)
}
console.log("object render")
  return (
    <div>
    <button onClick={changeName}>{person.name} {person.name2}</button>
    </div>
  )
}
