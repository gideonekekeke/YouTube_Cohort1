import React from 'react'
import styled from "@emotion/styled"

const Container = styled.div``
const Hold = styled.div``
const T= styled.h3``
const S = styled.span``
const S1 = styled.div``

interface Iprops{
    title:string;
    span:string;
    span2:string


}

const CardContent:React.FC<Iprops> = ({title, span, span2}) => {
  return (
    <Container>
        <Hold>
            <T>{title}</T>
            <S>{span}</S>
            <S1>{span2}</S1>

        </Hold>

    </Container>
  )
}

export default CardContent