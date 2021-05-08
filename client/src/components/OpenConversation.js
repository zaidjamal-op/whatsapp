import React, { useState, useCallback } from 'react'
import { useConversations } from '../contexts/ConversationsProvider';
import "./OpenConversation.css";
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import { Avatar, IconButton } from '@material-ui/core';



export default function OpenConversation() {
  const { conversations } = useConversations()
  const [text, setText] = useState('')
  const setRef = useCallback(node => {
    if (node) {
      node.scrollIntoView({ smooth: true })
    }
  }, [])
  const { sendMessage, selectedConversation } = useConversations()

  function handleSubmit(e) {
    e.preventDefault()

    sendMessage(
      selectedConversation.recipients.map(r => r.id),
      text
    )
    setText('')
  }

  function randomColor() {
    let hex = Math.floor(Math.random() * 0xFFFFFF);
    let color = "#" + hex.toString(16);
  
    return color;
  }

  return (
    <div className="d-flex flex-column flex-grow-1">
       <div className="chat__header"> 

       {conversations.map((conversation, index)=>(
              <div 
              key={index}
               >
{conversation.selected ? conversation.recipients.map((recipient =>{
  
                    
                    return(
                      
                      
                      <IconButton><Avatar style={{
                        backgroundColor: randomColor()
                      }} >{recipient.name.charAt().toUpperCase()}</Avatar></IconButton>
                    )
                  })) : ''}
                 
                 
              </div>
            ))}
               

                
                {conversations.map((conversation, index)=>(
              <div className="chat__headerinfo"
              key={index}
               >

                 {conversation.selected ? conversation.recipients.map((recipient =>{
                    
                   return(
                     
                     <h3>{recipient.name}</h3>
                   )
                 })) : ''}
                 
                 
              </div>
            ))}
            
            
                <div className="chat__headerRight"> 
                    <IconButton> 
                        <SearchIcon />
                    </IconButton>

                    <IconButton> 
                        <AttachFileIcon />
                    </IconButton>

                    <IconButton> 
                        <MoreVertIcon />
                    </IconButton>
                </div>

            </div>

      <div className="flex-grow-1 overflow-auto chat__body ">
        
          {selectedConversation.messages.map((message, index) => {
            const lastMessage = selectedConversation.messages.length - 1 === index
            return (
              <div
                ref={lastMessage ? setRef : null}
                key={index}
                className={`${message.fromMe ? 'chat__reciever' : 'chat__message'}`}
              >
                
                <div className="chat__name">
                  {message.fromMe ? 'You' : message.senderName}
                </div>
                {message.text}
                <span className="chat__timestamp"> 
                    {new Date().getHours() + ":" + new Date().getMinutes()}
                </span>
                
              </div>
            )
          })}
        </div>
        <div className="chat__footer"> 
                <IconButton> 
                    <InsertEmoticonIcon />
                </IconButton>

                <form onSubmit={handleSubmit}> 
                    <input placeholder="Type a message" 
                    type="text" 
                    as = "textarea"
                    required
                    value = {text}
                    onChange={e => setText(e.target.value)}
                    />
                    <button type="submit">Send a message</button>
                </form>
                <IconButton> 
                <MicIcon /> 
                </IconButton>
            </div>
            </div>
  )
}
