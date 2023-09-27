import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div``
const ButHold = styled.button`
     padding: 10px;
     border-radius:10px;
     background-color: #1f1f1f;
     color: white;
     cursor: pointer;

     :hover{
        background-color: white;
        color: black;
     }
`

interface Iprops{
    text:string;

}
const Buttons:React.FC<Iprops> = ({text}) => {
  return (
    <Container>
        <ButHold>
            {text}
        </ButHold>

    </Container>
  )
}

export default Buttons