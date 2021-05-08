import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useConversations } from '../contexts/ConversationsProvider';
import { Avatar, IconButton } from '@material-ui/core';

export default function Conversations() {
  const { conversations, selectConversationIndex } = useConversations()

  function randomColor() {
    let hex = Math.floor(Math.random() * 0xFFFFFF);
    let color = "#" + hex.toString(16);
  
    return color;
  }

  return (
    <ListGroup variant="flush">
     
      {conversations.map((conversation, index) => (
        
        <ListGroup.Item
        className="activate"
          key={index}
          action
          onClick={() => selectConversationIndex(index)}
          active={conversation.selected}
        >
          
          {conversation.recipients.map((recipient =>(
            
            <IconButton><Avatar style={{
              backgroundColor: randomColor()
            }} >{recipient.name.charAt(0).toUpperCase()}</Avatar></IconButton>
          )))}
          
          {conversation.recipients.map(r => r.name).join(', ')}
          
        </ListGroup.Item>
        
      ))}
      
    </ListGroup>
    
  )
}
