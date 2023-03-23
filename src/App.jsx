import React from 'react';
import TitleAndButtons from './components/TitleAndButtons';
import Image from './components/Image';
import Announcement from './components/Announcement';
import NavBar from './components/NavBar';
import WebPages from './components/WebPages';
import Filters from './components/Filters';

const App = () => {
  return(
    <div style={{display: 'flex', flexFlow: 'column', alignItems: 'center'}}>
      <Image/>
      <TitleAndButtons/>
      <Announcement/>
      <NavBar/>
      <WebPages/>
    </div>
  )
}

export default App;