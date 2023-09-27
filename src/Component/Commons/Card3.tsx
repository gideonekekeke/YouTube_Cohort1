import React from 'react'
import styled from"@emotion/styled"
import {SiShortcut} from "react-icons/si"

const Container = styled.div`
    padding: 30px;
    
`
const Hold = styled.div`
display: flex;
gap:20px;

      
`
const Box = styled.div`
    height: 200px;
    width: 300px;
    background-color: #e84444;
    border-radius:10px;
    margin-top:40px;
`
const IconHold = styled.div`
     font-size: 20px;
`
const Text = styled.div`
    font-size: 20px;
    font-weight:bold;
`
const Icon = styled.div`
    position: relative;
    left: 250px;
    top: 150px;
    background-color: black;
    border-radius:5px;
    padding:5px;
    width: 30px;
`
interface Iprops{
    icon:any;
    text:string;
    

}

const Card3:React.FC<Iprops> = ({icon, text, }) => {
  return (
    <Container>
        <Hold>
           
           <IconHold> {icon}</IconHold>
           
           <Text> {text}</Text>
        </Hold>
        <Box>
            <Icon>{<SiShortcut/>}</Icon>
        </Box>
        

    </Container>
  )
}

export default Card3