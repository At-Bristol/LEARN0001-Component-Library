import React from 'react'
import styled from 'styled-components'

export const H1 =styled.h1`
    font-family: FS Elliot Pro;
    font-weight: 800;
    font-size: 30px;
    color: black;
    
`



export const H2 = styled.h2`
    font-family:FS Elliot;
    font-weight: normal;
    font-size: 24px;
    color: black;
    `

export const HInValid = H2.withComponent('h3').extend`
    font-size: 15px;
    color: #e52f30;
    `


export const HValid = H2.withComponent('h4').extend`
font-size: 15px;
color: #17aeaf;
`

export const P = styled.p`
    font-family:FS Elliot;
    font-weight: normal;
    font-size: 12px;
    color: red;

.example-color::selection {
  color: #f1c40f;
}

`
