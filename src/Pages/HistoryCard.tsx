import React from 'react'
import styled from '@emotion/styled'
import Card3 from '../Component/Commons/Card3'
import CardContent from '../Component/Commons/CardContent'
import Card4 from '../Component/Commons/Card4'

const Container = styled.div`
    margin-left:50px;
   
`
const Hold = styled.div`
  display: flex;
  margin-top:40px;
`
const CardHold = styled.div`
    padding:40px;
    margin-top:30px;
  `

const HistoryCard:React.FC = () => {
  return (
    <Container>
      <h1>History</h1>
      <Card4
       bdd=''
      />
      <CardContent
         title='Loser gets wet! parkour challenge'
         span='12m views'
         span2=''
      />
     <Hold>
     <Card3
      text='Yesterday'
      icon={""}
         />
         <CardHold>
          <CardContent
          title='Piercing PRANK Gone BAD'
          span='AsmrLinaster 322m views '
          span2=''

          />
         </CardHold>
     </Hold>

    </Container>
  )
}

export default HistoryCard