import React from 'react'
import styled from '@emotion/styled'
import Card3 from '../Component/Commons/Card3'
import {GoHistory} from "react-icons/go"
import Content from '../Component/Commons/Content'
import {MdOutlineWatchLater} from "react-icons/md"
import {MdPlaylistPlay} from "react-icons/md"
import {AiOutlineLike} from "react-icons/ai"
import {HiOutlineScissors} from "react-icons/hi"
import CardContent from '../Component/Commons/CardContent'


const Container = styled.div`
    h4{
        margin-right:20px;
        color: #3DA6FF;
    }
`
const Hold = styled.div`
   margin-left:40px;
   
`
const H1 = styled.div``
const Holder = styled.div`
    display: flex;
    justify-content: space-between;
    /* width: 800px; */
    
`
const Left = styled.div`
padding:80px;
margin-top:50px;
    
`
const Line = styled.div`
    margin-bottom:5px;
`
const Holders = styled.div`
    display: flex;
    justify-content: space-between;

`
const LineHold = styled.div``
const Num = styled.div`
       margin-top:20px;
`
const CardHold = styled.div`
     margin-left:30px;
`

const Library:React.FC = () => {
  return (
    <Container>
       <Holder>
       <Hold>
        <Card3
        icon={<GoHistory/>}
        text='History'
        
        />
        <CardHold>
        <CardContent
        title='Loser gets wet! parkour challenge'
        span='Nick Pro'
        span2='142m views . 2 months ago '
           
        />
        </CardHold>
       
        </Hold>
        <h4>See more</h4>
        
        <Left>
            <Line>________________</Line>
            <LineHold>
            <Holders>
            <h5>Subscription</h5>
            <Num>0</Num>
            </Holders>
            </LineHold>


            <Line>________________</Line>
            <LineHold>
            <Holders>
            <h5>uploads</h5>
            <Num>0</Num>
            </Holders>
            </LineHold>

            <Line>________________</Line>
            <LineHold>
            <Holders>
            <h5>uploads</h5>
            <Num>0</Num>
            </Holders>
            </LineHold>
            
            
            <Line>________________</Line>
            
        </Left>
       </Holder>
        <H1>
            <Content  icon={<MdOutlineWatchLater/>}
             title='Watch Later'
             text='Saves videos to watch later.Your list will be shown right here'
           
            />
             <Content  icon={<MdPlaylistPlay/>}
             title='Play'
             text='Playlist that you create or save will be shown here.'
           
            />
             <Content  icon={<AiOutlineLike/>}
             title='Liked Videos'
             text='Use the thumbs-up icon to like videos. Your list will be shown right here.
             '
           
            />
             <Content  icon={<HiOutlineScissors/>}
             title='Your Clips'
             text="Clip and share your favourite moments. Your list will be shown right here.
             "
           
            />
        </H1>

    </Container>
  )
}

export default Library