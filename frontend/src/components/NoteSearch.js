import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Modal from '@mui/material/Modal';
import Typography  from '@mui/material/Typography';
import Button  from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Axios from 'axios';
import Divider from '@mui/material/Divider';
import SideMenu from './SideMenu';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import Autocomplete from '@mui/material/Autocomplete';

const useStyles = makeStyles({
    box: {
        backgroundColor: "#EBEAEB",
    },
    addButton: {
    },
    search: {
        backgroundColor: "#FFFF",
        borderRadius: "4px",
    },
    newNote: {
        position: 'absolute',
        background: "white",
        borderRadius: "8px",
        height: "33.6vh",
        top: '45%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 450,
    },
    noteModal: {
        fontWeight: "600"
    },
    sep: {
        flexGrow: 1
    },
    add: {
    },
    icon: {
        color: "black",
    },
})

const NoteSearch = (props) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [openTwo, setOpenTwo] = useState(false);
    const [noteName, setNotename] = useState('');
    const [noteList, setNoteList] = useState([]);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleOpenTwo = () => setOpenTwo(true);
    const handleCloseTwo = () => setOpenTwo(false);

    useEffect(() => {
        let data = {
            email: props.email
        };
        Axios.post('http://localhost:3002/user/get_all_notes', data)
            .then((res) => {
                let notelist = [];
                for (var i = 0; i < res.data.length; i++){
                    notelist.push(res.data[i].note_title);
                };
                setNoteList(notelist)
            })
    }, []);

    // Sets the note name //
    const getNoteName = (e) => {
        setNotename(e.target.value);
    };

    // Submits data to DB //
    const submitData = () => {
        console.log(noteName);
        let data = {
            email: props.email,
            title: noteName
        };
        Axios.post('http://localhost:3002/post/new_note', data)
            .then((res) => console.log(res))
    };

    return (
        <div>
            <Box sx={{flexGrow: 1, width: "108.4%"}}>
                <AppBar style={{ backgroundColor: "#EBEAEB" }} className={classes.box} elevation={0} position="static">
                    <Toolbar variant="dense">
                        <Typography sx={{ fontWeight: "600", marginTop: "0.1vh"}} color="black" variant="h5">simple-notes</Typography>
                        <div className={classes.sep}></div>
                        <div className={classes.add}>
                            <IconButton className={classes.addButton} color="inherit" onClick={handleOpenTwo}>
                                <NoteAddIcon className={classes.icon}/>
                            </IconButton>
                        </div>

                    </Toolbar>
                    <Divider className={classes.divider} orientation="vertical" flexItem/>
                </AppBar>
            </Box>

   
            {/* NEW NOTE MODAL */}
            <Modal
            open={openTwo}
            onClose={handleCloseTwo}
            aria-labelledby="modal-title"
            aria-describedby="modal-desc"
            >
                <Box className={classes.newNote}>
                    <Typography id="modal-title" variant="h6" align="center" sx={{ fontWeight: "500", marginTop:"4vh" }}>
                        NEW NOTE:
                    </Typography>
                    <div style={{ marginTop: "4vh", width: "100%",  textAlign: "center" }}>
                    <TextField size="small" sx={{ width: "80%", textAlign: "center" }} placeholder="Title" onChange={(e) => setNotename(e.target.value)}/>
                    <br></br>
                    <Button variant="contained" sx={{ marginTop: "4vh", marginBottom: "4vh", backgroundColor: "black"}} onClick={submitData}>Submit</Button>
                    </div>
                </Box>
            </Modal>
        </div>
    )
};

export default NoteSearch;