import React, { useState } from 'react'

const ChatInput = ({ addDataIntogroup }) => {

  const [message, setmessage] = useState("")
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  function getActualTimeInAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  const handleAddData = () => {
    const d = new Date();
    var calcDate = "" + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
    addDataIntogroup({
      "message": message,
      "date": calcDate,
      "time": getActualTimeInAMPM(d)
    })
  }

  return (
    <div>
      <textarea
        placeholder='Enter your text here...........'
        onChange={(e) => { setmessage(e.target.value) }}
      >{message}</textarea>
      <button onClick={() => { handleAddData() }}></button>
    </div>
  )
}

export default ChatInput