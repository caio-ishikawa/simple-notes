import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';

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
    }
})

const NoteSearch = () => {
    const classes = useStyles();

    return (
        <div>
            <Box className={classes.box}>
                <TextField
                id="outlined-password-input"
                label="Search"
                size="small"
                className={classes.search}
                />
                <IconButton className={classes.addButton}>
                    <AddCircleIcon color="primary"/>
                </IconButton>
            </Box>
        </div>
    )
};

export default NoteSearch;