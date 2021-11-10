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
import FilterAltIcon from '@mui/icons-material/FilterAlt';


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
    const [filterColor, setFilterColor] = useState('');
    const open = Boolean(anchorEl);
    const dispatch = useDispatch();
    const reduxNotebook = useSelector((state) => state.notebook);
    const newNoteRedux = useSelector((state) => state.new_note)
    const email = props.email;

    //FILTER VARIABLES //
    const [anchorEl2, setAnchorEl2] = useState(null);
    const open2 = Boolean(anchorEl2);
    const handleClick2 = (event) => {
      setAnchorEl2(event.currentTarget);
    };
    const handleClose2 = () => {
      setAnchorEl2(null);
    };
    
    // Gets notes from API //
    useEffect(() => {
        let data = {
            email: email,
            color: 'all'
        };
        let response = [];
        let tags = [];
        let dates = [];

        // API Request to get notes data //
        Axios.post('http://localhost:3002/user/get_all_notes', data)
            .then((res) => {
                let data = res.data;

                // Pushes tags and note titles to separate arrays //
                for (var i = 0; i < data.length; i++) {
                    response.push(data[i].note_title);
                    tags.push(data[i].tag);
                    let parsedDate = data[i].date_added.slice(0, 10);
                    dates.push(parsedDate);
                }

                // Maps both arrays into object //
                const combinedRes = response.map((content, idx) => {
                    return {title: content, tag: tags[idx], date: dates[idx]};
                });

                setResults(combinedRes);
                setNoteList(response);
            });
      },[tag, newNoteRedux]);
    
    // Select notebooks //
    const handleList = (note, idx) => {
        dispatch({ type: 'NOTE_TITLE', payload: note});
        localStorage.setItem('title', note);
        setIndex(idx)
    };

    // Changes label color //
    const changeLabel = (color) => {
        let data = {
            email: email,
            note: noteTitle,
            color: color
        };

        Axios.post('http://localhost:3002/post/add_tag', data)
            .then((res) => {
                setTag(res.data.tag)
            });

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
    
    // Sets the list according to selected filter //
    const changeFilterColor = (color) => {
        var data = {
            email: email,
            color: color 
        };
        let titles = [];
        let dates = [];
        let tags = [];

        // SET RESULT TO TITLE, TAG AND DATE //
        Axios.post('http://localhost:3002/user/get_all_notes', data)
            .then((res) => {
                for (var i = 0; i < res.data.length; i++) {
                    titles.push(res.data[i].note_title);
                    dates.push(res.data[i].date_added);
                    tags.push(res.data[i].tag);
                };
                const combinedRes = titles.map((content, idx) => {
                    return {title: content, tag: tags[idx], date: dates[idx]};
                });
                setResults(combinedRes);
                console.log(combinedRes);
            });
    };

    return (
        <div className={classes.mainDiv}>
            <NoteSearch email={email}/>
            <Grid container spacing={1}>
                <Grid item sm={8} md={8} lg={8}>
                    <Autocomplete
                        className={classes.noteList}
                        disablePortal
                        id="combo-box-demo"
                        options={noteList}
                        size="small"
                        sx={{ margin: "auto" , width: "70%", backgroundColor: "white", marginTop: "2vh", marginBottom: "1vh", marginLeft: "1.5vh" }}
                        renderInput={(params) => <TextField sx={{ fontWeight: "600"}} {...params} 
                        placeholder="Search titles..." />}
                        onChange={(e, value) => handleList(value, noteList.indexOf(value))}
                        />
                    </Grid>
                    <Grid item sm={4} md={4} lg={4}>
                        <IconButton
                        id="basic-button"
                        aria-controls="basic-menu"
                        aria-haspopup="true"
                        aria-expanded={open2 ? 'true' : undefined}
                        onClick={handleClick2}
                        >
                            <FilterAltIcon/>
                        </IconButton>
                        <Menu
                        id="basic-menu"
                        anchorEl={anchorEl2}
                        open={open2}
                        onClose={handleClose2}
                        >
                            <MenuItem onClick={() => changeFilterColor("all")}>
                                <Box sx={{ width: "2vh", height: "2vh", backgroundColor: "black"}}
                                >
                                </Box>
                                <p>ALL</p>
                            </MenuItem>
                            <MenuItem onClick={() => changeFilterColor("#00AF54")}>
                                <Box sx={{ width: "2vh", height: "2vh", backgroundColor: "#00AF54"}}
                                >
                                </Box>
                                <p>green</p>
                            </MenuItem>
                            <MenuItem onClick={() => changeFilterColor("#D00000")}>
                                <Box sx={{ width: "2vh", height: "2vh", backgroundColor: "#D00000"}}
                                >
                                </Box>
                                <p>red</p>
                            </MenuItem>
                            <MenuItem onClick={() => changeFilterColor("#FFBA08")}>
                                <Box sx={{ width: "2vh", height: "2vh", backgroundColor: "#FFBA08"}}
                                >
                                </Box>
                                <p>yellow</p>
                            </MenuItem>
                            <MenuItem onClick={() => changeFilterColor("#145C9E")}>
                                <Box sx={{ width: "2vh", height: "2vh", backgroundColor: "#145C9E"}}
                                >
                                </Box>
                                <p>blue</p>
                            </MenuItem>
                            <MenuItem onClick={() => changeFilterColor("#CC59D2")}>
                                <Box sx={{ width: "2vh", height: "2vh", backgroundColor: "#CC59D2"}}
                                >
                                </Box>
                                <p>pink</p>
                            </MenuItem>
                        </Menu>
                    </Grid>
                </Grid>
                <List component="nav" aria-label="test" className={classes.list}>
                    {results.map((note, idx) => {
                        return(
                            <Grid container spacing={0}>
                                <Grid item sm={11} md={11} lg={11}>
                                <ListItemButton className={classes.list} key={idx} onClick={() => handleList(note.title, idx)} selected={idx === index ? true : false }>
                                    <ListItemText key={idx} primary={note.title} secondary={note.date} sx={{ marginLeft: "1.2vh"}} primaryTypographyProps={{ fontWeight: '600'}} />
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