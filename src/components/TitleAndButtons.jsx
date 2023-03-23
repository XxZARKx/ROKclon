import React from 'react'
import styled from 'styled-components'

const TitleAndButtons = () => {
  return (
    <Wrapper>
      <h1>
        <a href='#'>remote<Line>|</Line><strong>OK</strong><span className='mark'>&#174;</span></a>
      </h1>
      <Buttons>
          <BtnColor zin='2' className='blue'>Health insurance</BtnColor>
          <BtnColor zin='2' white>Log in</BtnColor>
          <BtnColor fixed className='red' red>Post a remote job</BtnColor>
        </Buttons>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 10%;
  position: absolute;
  top: 0;

  h1{
    width: 100%;
    text-align: center;
    margin-top: 5px;
    &:hover{
      opacity: .7;
    }
  }
  a{
    color: white;
    font-size: 40px;
    height: max-content;
    position: relative;
    font-family:'Pacifico', cursive;
    letter-spacing: .1rem;
    text-decoration: none;
    margin-left: 5px;

  }
  strong{
    font-size: 30px;
    font-family: 'Nunito', sans-serif;
    font-weight: 0;
  }
  
  .mark{
    font-family: 'Nunito', sans-serif;
    font-size: 10px;
  }
`

const Line = styled.span`
      font-family: 'Poppins', sans-serif;
      color: white;
      font-size: 40px;
      margin-left: 10px;
  `


const Buttons = styled.ul`
  width: max-content;
  list-style-type: none;
  display: flex;
  gap: 1rem;
  margin:0 0 auto auto;
  position: absolute;
  top: 15px;
  right: 185px;
  
  .red{
    right: 15px;
  }
 
  .blue{
    margin-right: -5px;
  }
  `

export const BtnColor = styled.li`
height: max-content;
border-radius: .75rem;
position: ${props => props.fixed ? 'fixed' : 'static'};
color: ${(props) => props.white ? '#000' : '#ffff'};
font-family: 'Montserrat', sans-serif;
font-size: 15px;
font-weight: 800;
padding: .6rem;
list-style-type: none;

&:hover{
  background-color: transparent;
  cursor: pointer;
}

background-color: ${(props) => props.white ? '#ffffff' : (props.red ? '#fe4742' : '#5656c2')};
border: 2px solid ${(props) => props.white ? '#ffffff' : (props.red ? '#fe4742' : '#5656c2')};


&:hover{
  border-color: ${(props) => props.white ? '#ffffff' : (props.red ? '#fe4742' : '#22f5f5')};
  color: ${(props) => props.white? '#ffffff' : (props.red ? '#fe4742' : '#22f5f5')};
}

z-index: ${(props) => props.zin};

${(props) =>
    props.invert &&
    `
      color: #fe4742;
      background-color: transparent;
      border-color: #fe4742;
      &:hover {
        color: #ffffff;
        background-color: #fe4742;
        border-color: #ffffff;
      }
    `}
`

export default TitleAndButtons