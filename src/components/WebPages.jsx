import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Filters from './Filters'
import amazon from '../assets/amazon.png'
import gitHub from '../assets/github.png'
import stripe from '../assets/stripe.png'
import shopify from '../assets/shopify.png'
import upwork from '../assets/upwork.png'
import indeed from '../assets/indeed.png'
import angelList from '../assets/angellist.png'




const WebPages = () => {

const [customers] = useState([
    {src: amazon, alt: 'foto de amazon web services'},
    {src: gitHub, alt: 'foto de gitHub'},
    {src: stripe, alt: 'foto de stripe'},
    {src: shopify, alt: 'foto de shopify'},
    {src: upwork, alt: 'foto de upwork'},
    {src: indeed, alt: 'foto de indeed'},
    {src: angelList, alt: 'foto de angelList'},
])

    return (
    <Wrapper>
        <div className='photosContainer'>

        <p className='message'>trusted by</p>
        {
            customers.map((custommer, index) =>{
                return(
                    <ImagesCustommer key={index} src={custommer.src} />
                    )
            })
        }
        </div>

    <Filters/>
    </Wrapper>
  )
}




const Wrapper = styled.div`
width: 1100px;
display: flex;
align-items: center;
flex-flow: column;
font-family: 'Nunito', sans-serif;
.message{
    font-size: 10px;
    color: rgba(0, 0, 0, 0.5);
}
position: absolute;
top: 440px;
z-index: 3;
cursor: pointer;
.photosContainer{
    display: flex;
    gap: 2rem;
}
`
const ImagesCustommer = styled.img`

    filter: grayscale(1);

    &:hover{
        opacity:.2;
    }

`

export default WebPages