import React from 'react'
import styled from "@emotion/styled"
import Card2 from '../Component/Commons/Card2'

const Container = styled.div`
      padding: 30px;
    
`
const Hold = styled.div`
   
    
`

const Subscription:React.FC = () => {
  return (
    <Container>
        <Hold>
            <Card2
             text='Beauty & Fashion'
             name='Christen Dominique'
             subscribers='4.51m subscribers'
            />

        </Hold>
        
        <h1>Subscription</h1>
        <Card2
          text='Comedy'
          name=''
          subscribers=''
        />
        <Card2
          text='Sports'
          name=''
          subscribers=''
        />
        <Card2
          text='Music'
          name=''
          subscribers=''
        />
        <Card2
          text='Tech'
          name=''
          subscribers=''
        />
        <Card2
          text='Gaming'
          name=''
          subscribers=''
        />
        <Card2
          text='Cooking and Health'
          name=''
          subscribers=''
        />
        <Card2
          text='Film and Entertainment'
          name=''
          subscribers=''
        />

    </Container>
  )
}

export default Subscription