import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import PreviewIcon from '@mui/icons-material/Preview';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';

const useStyles = makeStyles({
    box: {
        padding: "1vh",
        height: "3.66vh",
        backgroundColor: "#EBEAEB",
    },
});

const TextUtilBar = () => {
    const classes = useStyles();
    const [selected, setSelected] = useState(false);


    return(
        <div>
            <Box className={classes.box}>
                <ToggleButton
                value="check"
                selected={selected}
                onChange={() => setSelected(!selected)}
                >
                    <EditIcon/>
                </ToggleButton>
            </Box>
        </div>
    )
};

export default TextUtilBar;