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
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';


const useStyles = makeStyles({
    mainDiv: {
    },
    list: {
        width: "107%",
    },
    listTag: {
        float: "right",
        overflow: "ellipsis"
    },
    tagButton: {
        float: "right",
    },
    label: {
    },
    form: {
        border: "none"
    },
    noteList: {
        backgroundColor: "black"
    }
})

const NoteList = (props) => {
    const classes = useStyles();
    const [results, setResults] = useState([]);
    const [tag, setTag] = useState('');
    const [noteTitle, setNoteTitle] = useState('');
    const [anchorEl, setAnchorEl] = useState(null);
    const [index, setIndex] = useState(0);
    const [noteList, setNoteList] = useState([]);
    const open = Boolean(anchorEl);
    const dispatch = useDispatch();
    const reduxNotebook = useSelector((state) => state.notebook);
    const email = props.email;
    
    // Gets notes from API //
    useEffect(() => {
        let data = {
            email: email,
        };
        let response = [];
        let tags = [];

        // API Request to get notes data //
        Axios.post('http://localhost:3002/user/get_all_notes', data)
            .then((res) => {
                console.log(res.data);
                let data = res.data;

                // Pushes tags and note titles to separate arrays //
                for (var i = 0; i < data.length; i++) {
                    response.push(data[i].note_title);
                    tags.push(data[i].tag);
                }

                // Maps both arrays into object //
                const combinedRes = response.map((content, idx) => {
                    return {title: content, tag: tags[idx]};
                });

                setResults(combinedRes);
                setNoteList(response);
            });
      },[tag]);
    
    // Select notebooks //
    const handleList = (note, idx) => {
        dispatch({ type: 'NOTE_TITLE', payload: note});
        localStorage.setItem('title', note);
        setIndex(idx)
    };

    // Changes label color //
    const changeLabel = (color) => {
        let data = {
            email: 'caio@caiotest.com',
            note: noteTitle,
            color: color
        };

        Axios.post('http://localhost:3002/post/add_tag', data)
            .then((res) => setTag(res.data.tag));

    };

    // Selectes which note tag menu in the list to open //
    const handleClick = (event, note) => {
        setAnchorEl(event.currentTarget)
        setNoteTitle(note)
    };

    // Closes list //
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.mainDiv}>
                <NoteSearch email={email}/>
                <Autocomplete
                    className={classes.noteList}
                    disablePortal
                    id="combo-box-demo"
                    options={noteList}
                    size="small"
                    sx={{ margin: "auto" , width: "99%", backgroundColor: "white", marginTop: "2vh", marginBottom: "1vh", marginLeft: "1.5vh" }}
                    renderInput={(params) => <TextField sx={{ fontWeight: "600"}} {...params} 
                    placeholder="Search titles..." />}
                    onChange={(e, value) => handleList(value, noteList.indexOf(value))}
                    />
                <List component="nav" aria-label="test" className={classes.list}>
                    {results.map((note, idx) => {
                        return(
                            <Grid container spacing={0}>
                                <Grid item sm={11} md={11} lg={11}>
                                <ListItemButton className={classes.list} key={idx} onClick={() => handleList(note.title, idx)} selected={idx === index ? true : false }>
                                    <ListItemText key={idx} primary={note.title} sx={{ marginLeft: "1.2vh"}} primaryTypographyProps={{ fontWeight: '600'}} secondary="date"/>
                                </ListItemButton> 
                                </Grid>
                                <Grid key={idx} item sm={1} md={1} lg={1}>
                                    <div style={{ width: "100%"}}>
                                        <IconButton
                                        sx={{ float: "right" }}
                                        className={classes.tagButton}
                                        onClick={(e) => handleClick(e, note.title)}
                                        aria-controls="basic-menu"
                                        aria-haspopup="true"
                                        aria-expanded={open ? open : undefined}
                                        >
                                                <BookmarkIcon sx={{ color: note.tag ? note.tag : "#808080"}} className={classes.listTag}/>
                                        </IconButton>
                                    </div>
                                    <Menu
                                    elevation={1}
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
                                        <MenuItem id={idx} onClick={() => changeLabel("#D00000")}>
                                            <Box sx={{ width: "2vh", height: "2vh", backgroundColor: "#D00000"}}
                                            >
                                            </Box>
                                            <p>red</p>
                                        </MenuItem>
                                        <MenuItem id={idx} onClick={() => changeLabel("#FFBA08")}>
                                            <Box sx={{ width: "2vh", height: "2vh", backgroundColor: "#FFBA08"}}
                                            >
                                            </Box>
                                            <p>yellow</p>
                                        </MenuItem>
                                        <MenuItem id={idx} onClick={() => changeLabel("#145C9E")}>
                                            <Box sx={{ width: "2vh", height: "2vh", backgroundColor: "#145C9E"}}
                                            >
                                            </Box>
                                            <p>blue</p>
                                        </MenuItem>
                                        <MenuItem id={idx} onClick={() => changeLabel("#CC59D2")}>
                                            <Box sx={{ width: "2vh", height: "2vh", backgroundColor: "#CC59D2"}}
                                            >
                                            </Box>
                                            <p>pink</p>
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