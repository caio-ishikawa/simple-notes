import Box from '@mui/material/Box';
import { useState } from 'react';
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

const useStyles = makeStyles({
    box: {
        backgroundColor: "#EBEAEB",
    },
    addButton: {
        float: "right",
    },
    search: {
        maxWidth: "22vh",
        minWidth: "20vh",
        backgroundColor: "#FFFF",
        borderRadius: "4px",
    },
    newNote: {
        position: 'absolute',
        background: "white",
        borderRadius: "8px",
        height: "10vh",
        top: '10%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
    },
    sep: {
        flexGrow: 1
    },
    add: {
        flexGrow: 1,
        marginLeft: "2vh"
    },
    divider: {
    },
})

const NoteSearch = (props) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [openTwo, setOpenTwo] = useState(false);
    const [noteName, setNotename] = useState('');
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleOpenTwo = () => setOpenTwo(true);
    const handleCloseTwo = () => setOpenTwo(false);

    const getNoteName = (e) => {
        setNotename(e.target.value);
    };

    const submitData = () => {
        console.log(noteName);
        let data = {
            email: props.email,
            title: noteName
        };
        Axios.post('http://localhost:3002/post/new_notebook', data)
        .then((res) => console.log(res))
    };

    return (
        <div>
            <Box sx={{flexGrow: 1}}>
                <AppBar style={{ backgroundColor: "#EBEAEB" }} className={classes.box} elevation={0} position="static">
                    <Toolbar variant="dense">
                        <SideMenu email={props.email} />
                        <div className={classes.add}>
                            <IconButton className={classes.addButton} onClick={handleOpen}>
                                <AddCircleIcon color="primary"/>
                            </IconButton>
                            <IconButton className={classes.addButton} onClick={handleOpenTwo}>
                                <AddCircleIcon color="primary"/>
                            </IconButton>
                        </div>

                    </Toolbar>
                    <Divider className={classes.divider} orientation="vertical" flexItem/>
                </AppBar>
            </Box>

            {/* NEW NOTEBOOK MODAL */}
            <Modal 
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
                <Box className={classes.newNote}>
                    <Typography id="modal-modal-title" variant="h6">
                        New notebook name:
                    </Typography>
                    <input placeholder="name" onChange={(e) => getNoteName(e)}/>
                    <Button onClick={submitData}>Submit</Button>
                </Box>
            </Modal>

            {/* NEW NOTE MODAL */}
            <Modal
            open={openTwo}
            onClose={handleCloseTwo}
            aria-labelledby="modal-title"
            aria-describedby="modal-desc"
            >
                <Box className={classes.newNote}>
                    <Typography id="modal-title" variant="h6">
                        New note name:
                    </Typography>
                    <input placeholder="note"/>
                    <Button>Submit</Button>
                </Box>
            </Modal>
        </div>
    )
};

export default NoteSearch;