import React from 'react'
import styled from '@emotion/styled'

const Hold = styled.div`
   
`
const CardHold = styled.div<{ bdd:string}>`
  background-color:white;
  border: ${(props)=> props.bdd};
   height: 400px;
  width: 300px; 
  
  border-radius:10px;
  background-color:white
`


interface Iprops{
    bdd:string;
}

const Card4:React.FC<Iprops> = ({bdd}) => {
  return (
    <Hold>
        <CardHold bdd={bdd}
        >
        </CardHold>
        

    </Hold>
  )
}

export default Card4