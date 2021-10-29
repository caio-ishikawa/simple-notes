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
    const [content, setContent] = useState('');

    // Changes state based on props.content //
    useEffect(() => {
        setContent(props.content);
    },[props.content]);

    // Toggles between edit and view mode (redux) //
    const handleEditToggle = () => {
        setSelected(!selected);
        const type = selected.toString().toUpperCase();
        dispatch({ type: type });
        console.log(selected);
    };

    // Saves notes  //
    // IMPORTANT, THIS DOES NOT RETURN UP-TO-DATE INFO FROM BACKEND (findOneAndUpdate returns old value for some reason) BUT IT WORKS //
    // MAKE FUNCTION TO CHANGE STATE BASED ON props.title //
    const saveNotebook = () => {
        let data = {
            email: "caio@caiotest.com",
            notebook: "caiotest's Notebook",
            note_title: 'test title',
            note: content
        };
        console.log(content);
        Axios.post('http://localhost:3002/post/add_note', data)
        .then((res) => console.log(res));
    };

    return(
        <div key={props.content} className={classes.divMain}>
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
                        <button onClick={saveNotebook}>SAVE</button>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
};

export default TextUtilBar;