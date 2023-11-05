import React, { useState, useEffect } from 'react'
import '../styles/grouplist.css'
import Addgroup from './Addgroup'
import Popup from 'reactjs-popup';
import { useDispatch, useSelector } from 'react-redux';
import { addGroup } from './redux/GroupSlice';

const GroupsList = () => {

  const [groupNames, setGroupNames] = useState(["abkwdbuy", "dvuq", "wjhvdusyvd", "kbhdckbshdkjcyw", "jsvhdcsvdkc", "i"])

  const [newGroupName, setnewGroupName] = useState("")
  const [selectedColor, setselectedColor] = useState("")

  const dispatch = useDispatch();
  const groups = useSelector((state) => state.group)

  useEffect(() => {
    initialiGroupNames()
  }, [])



  const handleAddGroup = () => {
    if (newGroupName === "" || selectedColor === "") {
      return;
    }
    dispatch(addGroup({
      "groupName": newGroupName,
      "color": selectedColor
    }));

    const allgroupNames = [...groupNames];
    allgroupNames.push(newGroupName);
    setGroupNames(allgroupNames)
  }

  const initialiGroupNames = () => {
    const grps = groups["groups"];
    if (grps !== null || grps !== undefined) {
      setGroupNames(grps.map((grp) => { return grp.groupName }))
    }
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
            groupNames.map((group, i) => {
              return <div className='group_data'>
                <div className='group_logo' style={{ backgroundColor: 'blue' }}>{group.slice(0, Math.min(2, group.length))}</div>
                <span className='groupname'>{group}</span>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default GroupsList