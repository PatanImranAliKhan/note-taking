import React from 'react'

const ChatNav = ({ selectedGroup, color, setselectedIndex }) => {

  const handleBackButtonClick=()=>{
    setselectedIndex("-1");
  }

  return (
    <div className='group_datanav'>
      <div className='chatnavcontent'>
        <span className='backspan'>
          <i className="fa fa-arrow-left" aria-hidden="true" onClick={()=>{handleBackButtonClick()}}></i>
        </span>
        <div className='group_logo' style={{ backgroundColor: color }}>{selectedGroup.slice(0, Math.min(2, selectedGroup.length))}</div>
        <span className='groupnamespan'>{selectedGroup}</span>
      </div>
    </div>

  )
}

export default ChatNav