import React from 'react'
import bgimage from '../assets/chatbgimage.png'
import '../styles/chat.css'

const UnSelectedChatWindow = () => {
    return (
        <div className='unselectedchat'>
            <img src={bgimage} alt="Chat_BG_image" />
            <span className='heading'>Pocket Notes</span>
            <p>Send and receive messages without keeping your phone online. 
                <br/>Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
            <div className='footer'>
                <i class="fa-solid fa-lock"></i> end-to-end encrypted
            </div>
        </div>
    )
}

export default UnSelectedChatWindow