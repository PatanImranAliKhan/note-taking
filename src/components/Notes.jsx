import React, { useState, useEffect } from 'react'
import GroupsList from '../pages/GroupsList'
import ChatWindow from '../pages/ChatWindow'
import UnSelectedChatWindow from '../pages/UnSelectedChatWindow'
import '../styles/notes.css'

const Notes = () => {

    const [selectedIndex, setselectedIndex] = useState("-1");
    const [groups, setgroups] = useState([])

    useEffect(() => {
        InitializeLocalData();
    }, [])

    const InitializeLocalData = () => {
        const localdata = JSON.parse(localStorage.getItem("notesapp"));
        if (localdata !== null) {
            setgroups(localdata)
        }
    }

    const addNewGroup = (newGroupData)=>{
        var grps = [...groups]
        grps.push(newGroupData)
        setgroups(grps)
        localStorage.setItem("notesapp", JSON.stringify(grps))
    }

    const addDataIntogroup = (data)=> {
        var grps = [...groups]
        grps[selectedIndex]["messages"].push(data);
        setgroups(grps)
        localStorage.setItem("notesapp", JSON.stringify(grps))
    }

    return (
        <div className='notes'>
            <GroupsList
                className="gpl"
                groups={groups}
                addNewGroup={addNewGroup}
                selectedIndex={selectedIndex}
                setselectedIndex={setselectedIndex}
            />
            <div className='chatbox'>
                {
                    selectedIndex !== "-1" ?
                        <ChatWindow 
                            data={groups[selectedIndex]}
                            addDataIntogroup={addDataIntogroup}
                        />
                        :
                        <UnSelectedChatWindow />
                }
            </div>
        </div>
    )
}

export default Notes