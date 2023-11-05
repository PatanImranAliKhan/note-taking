import React, { useState } from 'react'
import '../styles/grouplist.css'
import Addgroup from './Addgroup'
import Popup from 'reactjs-popup';

const GroupsList = ({ groups, selectedIndex, setselectedIndex, addNewGroup }) => {

  const [groupNames, setGroupNames] = useState([])

  const [newGroupName, setnewGroupName] = useState("")
  const [selectedColor, setselectedColor] = useState("")

  const handleAddGroup = () => {
    if (newGroupName === "" || selectedColor === "") {
      return;
    }
    addNewGroup({
      "groupName": newGroupName,
      "color": selectedColor,
      "messages":[]
    });

    const allgroupNames = [...groupNames];
    allgroupNames.push(newGroupName);
    setGroupNames(allgroupNames)
  }

  return (
    <div className='groupslist'>
      <h1>Pocket Notes</h1>
      <div className='section1'>
        <div>
          <Popup trigger=
            {<button className='createnotes' style={{ cursor: 'pointer' }}><i className="fa-solid fa-plus"></i> Create Notes group</button>}
            modal nested>
            {
              Creategroup => (
                <div className='modal'>
                  <div className='content'>
                    <Addgroup
                      setnewGroupName={setnewGroupName} newGroupName={newGroupName} setselectedColor={setselectedColor}
                    />
                  </div>
                  <div>
                    <button className='createbuttoninmodal' onClick=
                      {() => { handleAddGroup(); Creategroup() }}>
                      Create
                    </button>
                  </div>
                </div>
              )
            }
          </Popup>
        </div>
        <div className='groups'>
          {
            groups.map((group, i) => {
              return <div key={i} className='group_data' style={{ backgroundColor: selectedIndex === group.groupName ? '#F7ECDC' : 'None' }}
                onClick={() => { setselectedIndex(i) }}>
                <div className='group_logo' style={{ backgroundColor: group.color }}>
                  {group.groupName.slice(0, Math.min(2, group.groupName.length))}
                </div>
                <span className='groupname'>{group.groupName}</span>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default GroupsList