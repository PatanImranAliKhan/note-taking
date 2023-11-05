import React from 'react'
import '../styles/addgroup.css'

const Addgroup = ({ setnewGroupName, newGroupName, setselectedColor }) => {

  const colors = ["#B38BFA", "#FF79F2", "#43E6FC", "#F19576", "#0047FF", "#6691FF"]

  return (
    <div className='addgroupContent'>
      <h2>Create New Notes group</h2>
      <div className='addgroupinputs'>
        <b >Group Name</b>
        <input type="text" className='form-input' placeholder='Enter your group name....'
          value={newGroupName}
          onChange={(e) => { setnewGroupName(e.target.value) }} />
        <b>Choose colour</b>
        <div className='colorss'>
          {
            colors.map((color, i) => {
              return (
                <button key={i} onClick={() => { setselectedColor(color) }}
                  style={{ backgroundColor: color }} className='colorbutton'>
                  &nbsp;
                </button>
              )
            })
          }
        </div>
      </div>
    </div>

  )
}

export default Addgroup