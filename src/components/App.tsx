import React from 'react';
import{Container,Card} from 'react-bootstrap';
import './App.css';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { MainMenu, MainMenuItem } from './MainMenu/mainMenu';

const menuItems=[
  new MainMenuItem("Home","/"),
  new MainMenuItem("About us","/about-us"),
  new MainMenuItem("Contact","/contact"),
  new MainMenuItem("Log in","/user/login")
]
function App() {
  return (
    <Container>
      <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
      <MainMenu items = {menuItems}></MainMenu>
    </Container>
  );
}

export default App;
