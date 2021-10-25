import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import EditIcon from '@mui/icons-material/Edit';
import ToggleButton from '@mui/material/ToggleButton';
import { useState } from 'react';
//import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


const useStyles = makeStyles({
    box: {
        padding: "1vh",
        height: "3.66vh",
        backgroundColor: "#EBEAEB",
    },
});


const TextUtilBar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    //const reduxState = useSelector((state) => state);
    const [selected, setSelected] = useState(false);

    const handleEditToggle = () => {
        setSelected(!selected);
        const type = selected.toString().toUpperCase();
        dispatch({ type: type });
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
            </Box>
        </div>
    )
};

export default TextUtilBar;