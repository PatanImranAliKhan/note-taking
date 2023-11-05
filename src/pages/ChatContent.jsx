import React from 'react'
import '../styles/chat.css'

const ChatContent = ({ data }) => {

  return (
    <div className='chatcontentbox'>
      {
        data.map((message, i) => {
          return (
            <div key={i} className='chatmessages'>
              <div>
                <p className='datetimedisplay'>
                  {message.time}
                  <br />
                  {message.date}
                </p>
              </div>
              <div>
                {message.message}
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default ChatContent