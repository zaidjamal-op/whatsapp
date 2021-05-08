import React from 'react'
import Sidebar from './Sidebar';
import OpenConversation from './OpenConversation';
import { useConversations } from '../contexts/ConversationsProvider';
import "./App.css";
import logo from "../images/logo.jpg";


export default function Dashboard({ id }) {
  const { selectedConversation } = useConversations()
  return (
    
    <div className="app">
      <div className="app__body"> 
      <Sidebar id={id} />
      {selectedConversation ? <OpenConversation /> : <img alt="logo" src={logo} />}
      </div>
    </div>
  )
}
