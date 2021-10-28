import Box from '@mui/material/Box';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Modal from '@mui/material/Modal';
import Typography  from '@mui/material/Typography';
import Button  from '@mui/material/Button';

const useStyles = makeStyles({
    box: {
        padding: "1vh",
        backgroundColor: "#EBEAEB",
    },
    addButton: {
        float: "right",
    },
    search: {
        maxWidth: "22vh",
        minWidth: "10vh",
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
    } 
})

const NoteSearch = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [noteName, setNotename] = useState('');
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const getNoteName = (e) => {
        setNotename(e.target.value);
    };

    const submitData = () => {
        console.log(noteName);
    };

    return (
        <div>
            <Box className={classes.box}>
                <TextField
                id="outlined-password-input"
                label="Search"
                size="small"
                className={classes.search}
                />
                <IconButton className={classes.addButton} onClick={handleOpen}>
                    <AddCircleIcon color="primary"/>
                </IconButton>
            </Box>
            <Modal 
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
                <Box className={classes.newNote}>
                    <Typography id="modal-modal-title" variant="h6">
                        New note name:
                    </Typography>
                    <input placeholder="name" onChange={(e) => getNoteName(e)}/>
                    <Button onClick={submitData}>Submit</Button>
                </Box>
            </Modal>
        </div>
    )
};

export default NoteSearch;