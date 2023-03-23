import React from 'react'
import styled from 'styled-components'
import { BtnColor } from './TitleAndButtons'

const Advertising = () => {
  return (
    <Wrapper>
    <a>
        <p>👉 Hiring remotely? Reach <span>1,800,000+ remote workers</span> on the 🏆 <u>#1 Remote Job Board</u></p>
        <BtnColor red>Post a remote job</BtnColor>
        <BtnColor invert  className='scdBtn'>Hide this</BtnColor>
    </a>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width:1100px;
    background-color: white;
    box-shadow: 0px 0px 5px gray;
    height: 80px;
    position: absolute;
    top: 105px;
    border-radius: 12px;
    z-index: 3;

    &:hover{
      background-color: #f5f5f5;
    }

a{
    display: flex;
    gap: .8rem;
    height: 100%;
    justify-content:center;
    align-items:center;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: .01px;
    font-family: 'Nunito', sans-serif;
    cursor: pointer;

    

    span{
        border-bottom: 2px solid black;
    }
}

`

export default Advertising