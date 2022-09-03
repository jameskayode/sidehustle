import React from 'react'
//import '/James.css'
import styled from 'styled-components'

const CardContainer=styled.div`
display:flex

`
const CardBox=styled.div`
width: 200px;
height: 150px;
color:white;
background: blue;
padding:1em
`

export const Card = () => {
  return (
    <div>
      <CardContainer>
        <CardBox>
        <h1>Title</h1>
        <h2>id</h2>
        <p>Body</p>
        </CardBox>
        </CardContainer>
    </div>
  )
}
