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
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const dispatch = useDispatch();
    const reduxNotebook = useSelector((state) => state.notebook);
    const email = props.email;

    console.log(reduxNotebook);

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

    const changeLabel = (note, color) => {
        console.log(note);
        let data = {
            email: 'caio@caiotest.com',
            note: note,
            color: color
        };
        Axios.post('http://localhost:3002/post/add_tag', data)
            .then((res) => console.log(res));
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
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
                            <div>
                                <Grid container spacing={0}>
                                    <Grid item sm={11} md={11} lg={11}>
                                    <ListItemButton className={classes.list} key={idx} onClick={(idx) => handleList(note, idx)} selectedindex={idx}>
                                        <ListItemText key={idx} primary={note} secondary="date"/>
                                    </ListItemButton> 
                                    </Grid>
                                    <Grid item sm={1} md={1} lg={1}>
                                        <IconButton
                                        className={classes.tagButton}
                                        onClick={handleClick}
                                        aria-controls="basic-menu"
                                        aria-haspopup="true"
                                        aria-expanded={open ? open : undefined}
                                        >
                                                <LabelIcon className={classes.listTag}/>
                                        </IconButton>
                                        <Menu
                                        id="menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}
                                        >
                                            <MenuItem key={idx} onClick={() => changeLabel(note, "#00AF54")}>
                                                <Box sx={{ width: "2vh", height: "2vh", backgroundColor: "#00AF54"}}>
                                                </Box>
                                                <p>green</p>
                                            </MenuItem>
                                        </Menu>
                                    </Grid>
                                </Grid>

                            </div>
                      
                        )
                    })}
                </List>
        </div>
    )

};

export default NoteList;