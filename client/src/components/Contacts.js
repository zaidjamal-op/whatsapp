import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useContacts } from '../contexts/ContactsProvider';
import { Avatar, IconButton } from '@material-ui/core'

export default function Contacts() {
  const { contacts } = useContacts()
  function randomColor() {
    let hex = Math.floor(Math.random() * 0xFFFFFF);
    let color = "#" + hex.toString(16);
  
    return color;
  }

  return (
    <ListGroup variant="flush">
      {contacts.map(contact => (
        <ListGroup.Item key={contact.id}>
          <IconButton><Avatar  style={{
              backgroundColor: randomColor()
            }}  >{contact.name.charAt(0).toUpperCase()}</Avatar></IconButton>
          {contact.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}
