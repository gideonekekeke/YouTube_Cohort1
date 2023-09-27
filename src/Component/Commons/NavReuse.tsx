import React from 'react'
import styled from '@emotion/styled'
import {NavLink} from "react-router-dom"

const Container = styled.div``
const IconHold = styled.div`
     display: flex;
     padding: 15px;
     gap:20px;
     font-size: 18px;
`
const Span = styled.div``
interface Iprops{
    text:string;
    icon:any;
    linkto:string;

}

const NavReuse :React.FC<Iprops>= ({text, icon, linkto}) => {
  return (
    <Container>
        <NavLink to={linkto}
            style={{color:"white", textDecoration:"none"}}>
        <IconHold>
            {icon}
            <Span>{text}</Span>
        </IconHold>
        </NavLink>

        
        
    </Container>
  )
}

export default NavReuse