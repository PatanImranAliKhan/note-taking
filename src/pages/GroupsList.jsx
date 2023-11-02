import React, { useState } from 'react'
import '../styles/grouplist.css'

const GroupsList = () => {

  const [groupNames, setGroupNames] = useState(["abkwdbuy", "dvuq", "wjhvdusyvd", "kbhdckbshdkjcyw", "jsvhdcsvdkc", "i"])

  return (
    <div className='groupslist'>
      <h1>Pocket Notes</h1>
      <div className=''>
        <div>
          <button className='createnotes'><i class="fa-solid fa-plus"></i> Create Notes group</button>
        </div>
        <div className='groups'>
          {
            groupNames.map((group, i) => {
              return <div className='group_data'>
                <span className='group_logo' style={{ backgroundColor: 'blue' }}>{group.slice(0, Math.min(2, group.length))}</span>
                <span>{group}</span>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default GroupsList