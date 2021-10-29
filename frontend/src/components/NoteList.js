import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useState, useEffect } from 'react';
import NoteSearch from '../components/NoteSearch'
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    mainDiv: {
    }
})

const NoteList = (props) => {
    const classes = useStyles();
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
        localStorage.setItem('title', note);
    };

    return (
        <div className={classes.mainDiv}>
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
        </div>
    )

};

export default NoteList;