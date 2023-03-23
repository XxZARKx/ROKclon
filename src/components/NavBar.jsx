import React from 'react'
import styled from 'styled-components'
import lupa from '/home/xxzarkx/project_01/folder1/src/assets/lupa.svg'
import Advertising from './Advertising';

const NavBar = () => {
  return (
    <Nav type='text'>
        <input type='text'></input>
      <Advertising/>
    </Nav>
  )
}

const Nav = styled.div`

display: flex;
justify-content: center; 
position: absolute;
top: 235px; 
height: 55px;
width: max-content;
background-color: white;
border-radius: 40px;
input{
font-size: 25px;
font-family: 'M PLUS Rounded 1c', sans-serif;
font-weight: 800;
width: 100%;
width: 290px;
padding: 0 55px 0 55px;
border: none;
outline: none;  
background-color: transparent;
z-index: 2;
}

&::before {
content: '';
background-image: url(${lupa});
background-size: contain;
background-repeat: no-repeat;
position: absolute;
left: 15px;
top: 13px;
width: 30px;
height: 30px;
cursor: text;
}
  


`

export default NavBar