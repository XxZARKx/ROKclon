import React from 'react';
import styled from 'styled-components';
import myImage from '/home/xxzarkx/project_01/folder1/src/assets/myImage.jpeg';
import wave from '/home/xxzarkx/project_01/folder1/src/assets/wave5.png';

const Image = () => {
  return (
    <Wrapper>
      <img className='fondo' src={myImage} alt='Imagen de fondo' />
      <img className='wave' src={wave} alt='Imagen de la ola' />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 50vh;
  width: 100vw;
  background-color: chocolate;
  position: relative;

  .fondo {
    width: 100vw;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    position: relative;
    background-size: cover;
  }

  .wave {
    background-size: contain;
    width: 100%;
    height: 50%;
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
  }
`;

export default Image;
