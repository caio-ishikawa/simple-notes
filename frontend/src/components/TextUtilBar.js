import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import EditIcon from '@mui/icons-material/Edit';
import ToggleButton from '@mui/material/ToggleButton';
import { useState } from 'react';
//import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Axios from 'axios';

// SAVE TO DEFAULT NOTEBOOK BUTTON //


const useStyles = makeStyles({
    box: {
        padding: "1vh",
        height: "3.66vh",
        backgroundColor: "#EBEAEB",
    },
});


const TextUtilBar = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [selected, setSelected] = useState(false);

    const handleEditToggle = () => {
        setSelected(!selected);
        const type = selected.toString().toUpperCase();
        dispatch({ type: type });
        console.log(selected);
    };

    const saveNotebook = () => {
        let data = {
            email: "caio@caiotest.com",
            notebook: "caiotest's Notebook",
            note_title: "note_title_test232",
            note: props.content 
        };
        Axios.post('http://localhost:3002/post/add_note', data)
        .then((res) => console.log(res));
    };


    return(
        <div>
            <Box className={classes.box}>
                <ToggleButton
                value="check"
                selected={selected}
                onChange={handleEditToggle}
                >
                    <EditIcon/>
                </ToggleButton>
                <button onClick={saveNotebook}>TEST</button>
            </Box>
        </div>
    )
};

export default TextUtilBar;