import React from 'react'
import styled from 'styled-components'

const Announcement = () => {
  return (
    <Text>
       <a href='#'><p>find a <strong>remote job</strong></p></a>
       <a href='#'><p>work from <strong>anywhere</strong></p></a>
    </Text>
  )
}

const Text = styled.div`
position: absolute;
top: 70px;
font-size: 45px;
line-height: 1rem;
font-family: 'M PLUS Rounded 1c', sans-serif;
text-align: center;
width: 100%;
cursor: pointer;
&:hover{
      opacity: .7;
    }

a{
    font-weight: 400;
    text-shadow: 2px 0px 4px black;
    text-decoration: none;
    color: white;
}
strong{
    font-weight: 800;
}
`

export default Announcement