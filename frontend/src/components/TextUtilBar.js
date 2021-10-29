import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import EditIcon from '@mui/icons-material/Edit';
import ToggleButton from '@mui/material/ToggleButton';
import { useState, useEffect } from 'react';
//import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Axios from 'axios';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';


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
    },
    button: {
        width: "4vh",
        marginLeft: "4vh",
        height: "3vh"
    },
    saveButton: {
        height: "3vh"
    },
    sep: {
        flexGrow: "1"
    },
    divider: {
        paddingRight: "15vh",
    }
});

const TextUtilBar = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [selected, setSelected] = useState(false);
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');

    // Changes state based on props.content //
    useEffect(() => {
        setContent(props.content);
        setTitle(props.title)
    },[props.content, props.title]);

    // Toggles between edit and view mode (redux) //
    const handleEditToggle = () => {
        setSelected(!selected);
        const type = selected.toString().toUpperCase();
        dispatch({ type: type });
        console.log(selected);
    };

    // Saves notebook data
    const saveNotebook = () => {
        let data = {
            email: "caio@caiotest.com",
            notebook: "caiotest's Notebook",
            note_title: title,
            note: content
        };
        console.log(title);
        Axios.post('http://localhost:3002/post/add_note', data)
        .then((res) => console.log(res));
    };

    return(
        <div key={props.content} className={classes.divMain}>
            <Box className={classes.mainBox}>
                <AppBar elevation={0} className={classes.box} position="static">
                    <Divider className={classes.divider} orientation="vertical" flexItem/>
                    <Toolbar variant="dense">
                        <Divider orientation="vertical" flexItem/>
                        <ToggleButton
                        value="check"
                        selected={selected}
                        className={classes.button}
                        onChange={handleEditToggle}
                        >
                            <EditIcon/>
                        </ToggleButton>
                        <div className={classes.sep}></div>
                        <Button elevation={0} edge="end" className={classes.saveButton} onClick={saveNotebook} variant="contained">SAVE</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
};

export default TextUtilBar;