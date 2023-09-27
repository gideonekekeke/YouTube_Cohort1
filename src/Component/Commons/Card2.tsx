import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
    button{
        width: 140px;
        height: 40px;
        border-radius:50px;
        background-color: #3F3F3F;
        color: white;
        border: transparent;
    }

`
const Hold = styled.div`
      margin-left:30px;
`
const H1 = styled.h3``
const Box = styled.div`
      width: 120px;
      height: 120px;
      border-radius:70px;
      background-color:white;
`
const H2 = styled.h3``
const S = styled.h4``
const H4 = styled.h4``
const Lines = styled.div``
interface Iprops{
    text:string;
    name:string;
    subscribers:string;

}

const Card2:React.FC<Iprops> = ({text,name,subscribers}) => {
  return (
    <Container>
        <Hold>
        <H1>{text}</H1>
        <Box></Box>
        <H2>{name}</H2>
        <S>{subscribers}</S>
        <button>Subscribe</button>
        </Hold>
        
        <H4>show more</H4>
        <Lines>________________________________________________________________________________________________________________________________________________</Lines>



    </Container>
  )
}

export default Card2