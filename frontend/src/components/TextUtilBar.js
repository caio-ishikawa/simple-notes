import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import EditIcon from '@mui/icons-material/Edit';
import ToggleButton from '@mui/material/ToggleButton';
import { useState, useEffect } from 'react';
//import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Axios from 'axios';
import TextField from '@mui/material/TextField';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import  Typography  from '@mui/material/Typography';


// SAVE TO DEFAULT NOTEBOOK BUTTON //


const useStyles = makeStyles({
    box: {
        backgroundColor: "#EBEAEB",
    },
    search: {
        maxWidth: "52vh",
        minWidth: "30vh",
        marginRight: "2vh",
        backgroundColor: "#FFFF",
        borderRadius: "4px",
    },
    mainBox: {
        backgroundColor: "#EBEAEB",
    }
   
});


const TextUtilBar = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [selected, setSelected] = useState(false);
    const [newTitle, setNewTitle] = useState('');
    const [oldTitle, setOldTitle] = useState('');


    useEffect(() => {
        if (props.title != oldTitle) {
            setOldTitle(props.title);
        } else {
            console.log("did not change");
        }
    }, [props.title]);


    const handleEditToggle = () => {
        setSelected(!selected);
        const type = selected.toString().toUpperCase();
        dispatch({ type: type });
        console.log(selected);
    };

    const getNewTitle = (e) => {
        setNewTitle(e.target.value);
        console.log(newTitle);
    };

    const saveNotebook = () => {
        let data = {
            email: "caio@caiotest.com",
            notebook: "caiotest's Notebook",
            note_title: newTitle ? newTitle : oldTitle,
            note: props.content 
        };
        Axios.post('http://localhost:3002/post/add_note', data)
        .then((res) => console.log(res));
    };


    return(
        <div className={classes.divMain}>
            <Box className={classes.mainBox}>
                <AppBar elevation={0} className={classes.box} position="static">
                    <Toolbar variant="dense">
                        <ToggleButton
                        value="check"
                        selected={selected}
                        onChange={handleEditToggle}
                        >
                            <EditIcon/>
                        </ToggleButton>
                        <button onClick={saveNotebook}>TEST</button>
                        <TextField
                        id="outlined-password-input"
                        size="small"
                        defaultValue={oldTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        className={classes.search}
                        />
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
};

export default TextUtilBar;