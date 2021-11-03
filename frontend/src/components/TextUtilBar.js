import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import EditIcon from '@mui/icons-material/Edit';
import ToggleButton from '@mui/material/ToggleButton';
import DownloadIcon from '@mui/icons-material/Download';
import ShareIcon from '@mui/icons-material/Share';
import SaveIcon from '@mui/icons-material/Save';
import IconButton from '@mui/material/IconButton';
import { useState, useEffect } from 'react';
//import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Axios from 'axios';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ButtonGroup from '@mui/material/ButtonGroup';


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
        height: "3vh"
    },
    saveButton: {
        height: "3vh",
    },
    sep: {
        flexGrow: "1"
    },
    sep2: {
        marginRight: "2vh"
    },
    divider: {
    },
    buttonGroup: {
        color: "black",
    }
});

const TextUtilBar = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [selected, setSelected] = useState(true);
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
        Axios.post('http://localhost:3002/post/save_note', data)
        .then((res) => console.log(res));
    };

    // Downloads current note as .txt //
    const downloadFile = () => {
        console.log(typeof content)
        const element = document.createElement('a');
        const file = new Blob([content], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = title + '.md';
        document.body.appendChild(element);
        element.click();
    };

    return(
        <div key={props.content} className={classes.divMain}>
            <Box className={classes.mainBox}>
                <AppBar style={{ backgroundColor: "#EBEAEB"}} elevation={0} className={classes.box} position="static">
                    <Toolbar variant="dense">
                        <Divider orientation='vertical' flexItem/>
                        <div className={classes.sep2}></div>
                        <ToggleButton
                        value="check"
                        selected={selected}
                        className={classes.button}
                        onChange={handleEditToggle}
                        >
                            <EditIcon/>
                        </ToggleButton>
                        <div className={classes.sep}></div>
                        <ButtonGroup variant="contained" className={classes.buttonGroup} color="inherit">
                            <IconButton className={classes.button} onClick={downloadFile}>
                                <DownloadIcon/>
                            </IconButton>
                            <IconButton onClick={saveNotebook} className={classes.button}>
                                <SaveIcon/>
                            </IconButton>
                        </ButtonGroup>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
};

export default TextUtilBar;