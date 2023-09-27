import React from 'react'
import styled from "@emotion/styled"

const Container = styled.div`
  padding: 50px;
`
const Hold = styled.div`
   display: flex;
   gap: 15px;
`
const Icon = styled.div`
  font-size: 30px;
`
const Text = styled.div`
   font-size:20px;
`
const P = styled.p``
const Line = styled.div``

interface Iprops{
     icon:any;
     title:string;
     text:string;

}

const Content:React.FC<Iprops> = ({icon, title,text}) => {
  return (
    <Container>
        <Hold>
            <Icon>{icon}</Icon>
            <Text>{title}</Text>
        </Hold>
        <P>{text}</P>
        <Line>______________________________________________________________________________________________________________</Line>

    </Container>
  )
}

export default Content