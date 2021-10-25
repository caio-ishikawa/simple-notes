import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useState, useEffect } from 'react';
import NoteSearch from '../components/NoteSearch'
import Axios from 'axios';

const NoteList = (props) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const email = props.email;
    const notebooks = [];
    const notes = [];

    // Gets notebook + notes data from API //
    useEffect(() => {
        let data = { email : email};
        Axios.post('http://localhost:3002/user/get_data', data)
        .then((res) => {
            let notebook = res.data.notebooks;
            let note = res.data.notes;
            for (var i = 0; i < notebook.length; i++){
                notebooks.push(notebook[i].title);
            }
            for (var j = 0; j < note.length; j++) {
                notes.push(note[i].note_title);
            }
            console.log({notebooks, notes});
        });
      },[]);

    const results = notebooks.map((content, idx) => {
        return (
            <p id={idx}>{content}</p>
        )
    })

    // Toggles edit button //
    const handleList = (e, index) => {
        setSelectedIndex(index);
        console.log(index);
    };

    return (
        <div>
            <Box>
                <NoteSearch/>
                <List component="nav" aria-label='test'>
                    <ListItemButton onClick={(e) => handleList(e, 0)} selected={selectedIndex === 0}>
                        <ListItemText primary="note title" secondary="date"/>
                    </ListItemButton>
                    <ListItemButton onClick={(e) => handleList(e, 1)} selected={selectedIndex === 1}>
                        <ListItemText primary="note title" secondary="date"/>
                    </ListItemButton>
                </List>
            </Box>
        </div>
    )

};

export default NoteList;