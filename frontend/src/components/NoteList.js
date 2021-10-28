import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useState, useEffect } from 'react';
import NoteSearch from '../components/NoteSearch'
import Axios from 'axios';
import { useDispatch } from 'react-redux';

const NoteList = (props) => {
    const [results, setResults] = useState([]);
    const dispatch = useDispatch();
    const email = props.email;

    // Gets notes titles from API //
    useEffect(() => {
        let data = {
            email: email,
            title: "caiotest's Notebook"
        };

        Axios.post('http://localhost:3002/user/notebook_notes', data)
        .then((res) => setResults(res.data))
      },[]);

    
    // Select notebooks //
    const handleList = (note, index) => {
        dispatch({ type: 'NOTE_TITLE', payload: note});
        

        // pass note title to redux //
        // in markdownview, use useeffect function tied to redux state to fetch the content of the specific note //

        // get actual note from api //
    };

    return (
        <div>
            <Box>
                <NoteSearch/>
                <List component="nav" aria-label="test">
                    {results.map((note, idx) => {
                        return(
                            <ListItemButton key={idx} onClick={(idx) => handleList(note, idx)} selectedindex={idx}>
                                <ListItemText key={idx} primary={note} secondary="date"/>
                            </ListItemButton> 
                        )
                    })}
                </List>
            </Box>
        </div>
    )

};

export default NoteList;