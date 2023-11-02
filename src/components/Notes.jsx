import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initializeAllGroupsData } from '../pages/redux/GroupSlice'
import GroupsList from '../pages/GroupsList'
import ChatWindow from '../pages/ChatWindow'
import UnSelectedChatWindow from '../pages/UnSelectedChatWindow'
import '../styles/notes.css'

const Notes = () => {

    const [selectedGroup, setSelectedGroup] = useState(-1);
    const dispatch = useDispatch();

    useEffect(() => {
        InitializeLocalData();
    }, [])

    const InitializeLocalData = () => {
        const localdata = JSON.parse(localStorage.getItem("notesapp"));
        if (localdata !== null) {
            dispatch(initializeAllGroupsData({ payload: localdata }));
        }
    }

    return (
        <div className='notes'>
            <GroupsList
                selectedGroup={selectedGroup}
                setSelectedGroup={setSelectedGroup}
            />
            <div className='chatbox'>
                {
                    selectedGroup !== -1 ?
                        <ChatWindow />
                        :
                        <UnSelectedChatWindow />
                }
            </div>
        </div>
    )
}

export default Notes