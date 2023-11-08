import React from 'react'
import ChatNav from './ChatNav'
import ChatContent from './ChatContent'
import ChatInput from './ChatInput'
import '../styles/chat.css'

const ChatWindow = ({ data, addDataIntogroup, setselectedIndex }) => {

    return (
        <div className='chatwindow'>
            <div className='chatnavdiv'>
                <ChatNav selectedGroup={data['groupName']} color={data['color']} setselectedIndex={setselectedIndex}/>
            </div>
            <div className='chatcontentdiv'>
                <ChatContent data={data['messages']} />
            </div>
            <div className='chatinputdiv'>
                <ChatInput addDataIntogroup={addDataIntogroup} />
            </div>
        </div>
    )
}

export default ChatWindow