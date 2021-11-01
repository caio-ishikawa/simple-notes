import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useState, useEffect } from 'react';
import NoteSearch from '../components/NoteSearch'
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import LabelIcon from '@mui/icons-material/Label';
import Grid from '@mui/material/Grid';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const useStyles = makeStyles({
    mainDiv: {
    },
    list: {
        width: "107%",
    },
    listTag: {
        color: "grey",
        float: "right"
    },
    tagButton: {
        float: "right",
    },
    label: {
    },
    form: {
        border: "none"
    }
})

const NoteList = (props) => {
    const classes = useStyles();
    const [results, setResults] = useState([]);
    const [tag, setTag] = useState('');
    const [noteTitle, setNoteTitle] = useState('');
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const dispatch = useDispatch();
    const reduxNotebook = useSelector((state) => state.notebook);
    const email = props.email;

    // Gets notes titles from API //
    useEffect(() => {
        let data = {
            email: email,
            //title: "caiotest's Notebook"
        };
        let response = [];
        // Axios.post('http://localhost:3002/user/notebook_notes', data)
        // .then((res) => setResults(res.data))
        Axios.post('http://localhost:3002/user/get_all_notes', data)
            .then((res) => {
                let data = res.data;
                for (var i = 0; i < data.length; i++) {
                    response.push(data[i].note_title);
                }
                setResults(response)
            });
      },[]);

    
    // Select notebooks //
    const handleList = (note, index) => {
        dispatch({ type: 'NOTE_TITLE', payload: note});
        localStorage.setItem('title', note);
    };

    const changeLabel = (color) => {
        let data = {
            email: 'caio@caiotest.com',
            note: noteTitle,
            color: color
        };
        console.log({ noteTitle, color });

        Axios.post('http://localhost:3002/post/add_tag', data)
            .then((res) => console.log(res));
    };

    const handleClick = (event, note) => {
        setAnchorEl(event.currentTarget)
        setNoteTitle(note)
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <div className={classes.mainDiv}>
                <NoteSearch email={email}/>
                <List component="nav" aria-label="test" className={classes.list}>
                    {results.map((note, idx) => {
                        return(
                            <Grid container spacing={0}>
                                <Grid item sm={11} md={11} lg={11}>
                                <ListItemButton className={classes.list} key={idx} onClick={(idx) => handleList(note, idx)} selectedindex={idx}>
                                    <ListItemText key={idx} primary={note} secondary="date"/>
                                </ListItemButton> 
                                </Grid>
                                <Grid key={idx} item sm={1} md={1} lg={1}>
                                    <IconButton
                                    className={classes.tagButton}
                                    onClick={(e) => handleClick(e, note)}
                                    aria-controls="basic-menu"
                                    aria-haspopup="true"
                                    aria-expanded={open ? open : undefined}
                                    >
                                            <LabelIcon className={classes.listTag}/>
                                    </IconButton>
                                    <Menu
                                    id={idx}
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                    >
                                        <MenuItem id={idx} onClick={() => changeLabel("#00AF54")}>
                                            <Box sx={{ width: "2vh", height: "2vh", backgroundColor: "#00AF54"}}
                                            >
                                            </Box>
                                            <p>green</p>
                                        </MenuItem>
                                    </Menu>
                                </Grid>
                            </Grid>
                        )
                    })}
                </List>
        </div>
    )

};

export default NoteList;