import React from 'react'
import ChatNav from './ChatNav'
import ChatContent from './ChatContent'
import ChatInput from './ChatInput'

const ChatWindow = () => {
    return (
        <div>
            <div>
                <ChatNav />
            </div>
            <div>
                <ChatContent />
            </div>
            <div>
                <ChatInput />
            </div>
        </div>
    )
}

export default ChatWindow