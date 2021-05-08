import React, { useState } from 'react'
import { Tab, Nav, Modal } from 'react-bootstrap'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Avatar, IconButton} from "@material-ui/core";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Conversations from './Conversations'
import Contacts from './Contacts'
import NewContactModal from './NewContactModal'
import NewConversationModal from './NewConversationModal'
import "./Sidebar.css";
import whatsapp from "../images/whatsapp--v2.png"






const CONVERSATIONS_KEY = 'conversations'
const CONTACTS_KEY = 'contacts'

export default function Sidebar({ id}) {
  const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY)
  const [modalOpen, setModalOpen] = useState(false)
  const conversationsOpen = activeKey === CONVERSATIONS_KEY

  function closeModal() {
    setModalOpen(false)
  }

  

  return (
    <div className="d-flex flex-column sidebar">
      <div className="sidebar__header">

      
               
      <IconButton><Avatar src={whatsapp}></Avatar></IconButton>

                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>

                    {conversationsOpen ? <IconButton onClick={() => setModalOpen(true)}><AddCircleIcon/></IconButton> : <IconButton onClick={() => setModalOpen(true)} ><AccountBoxIcon /></IconButton>}

                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>


                </div>

            </div>

            <div className="sidebar__search">
                <div className="sidebar__searchContainer"> 
                        <input placeholder="Search or start new chat" type="text" />
                </div>

            </div>



      <div className=" d-flex flex-column flex-grow-1 flex-grow-1 overflow-auto sidebar__columns">
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs" className="justify-content-center sidebar__nav">
          <Nav.Item>
            <Nav.Link className="link" eventKey={CONVERSATIONS_KEY}>Chats</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="link" eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className="overflow-auto flex-grow-1">
          <Tab.Pane eventKey={CONVERSATIONS_KEY}>
            <Conversations />
          </Tab.Pane>
          <Tab.Pane eventKey={CONTACTS_KEY}>
            <Contacts />
          </Tab.Pane>
        </Tab.Content>
        
      </Tab.Container> 

      </div>

      <Modal show={modalOpen} onHide={closeModal}>
        {conversationsOpen ?
          <NewConversationModal closeModal={closeModal} /> :
          <NewContactModal closeModal={closeModal} />
        }
      </Modal>
    </div>
  )
}
