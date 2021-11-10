import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import Axios from 'axios';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles({
    button:{
    },
});

const ColorMenu = (props) => {
    const [anchorEl2, setAnchorEl2] = useState(null);
    const open2 = Boolean(anchorEl2);
    const handleClick2 = (event) => {
      setAnchorEl2(event.currentTarget);
    };
    const handleClose2 = () => {
      setAnchorEl2(null);
    };

  
    return (
      <div>
        <IconButton
          id="basic-button"
          aria-controls="basic-menu"
          aria-haspopup="true"
          aria-expanded={open2 ? 'true' : undefined}
          onClick={handleClick2}
        >
            <FilterAltIcon/>
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl2}
          open={open2}
          onClose={handleClose2}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
            <MenuItem>
                <Box sx={{ width: "2vh", height: "2vh", backgroundColor: "black"}}
                >
                </Box>
                <p>ALL</p>
            </MenuItem>
            <MenuItem>
                <Box sx={{ width: "2vh", height: "2vh", backgroundColor: "#00AF54"}}
                >
                </Box>
                <p>green</p>
            </MenuItem>
            <MenuItem>
                <Box sx={{ width: "2vh", height: "2vh", backgroundColor: "#D00000"}}
                >
                </Box>
                <p>red</p>
            </MenuItem>
            <MenuItem>
                <Box sx={{ width: "2vh", height: "2vh", backgroundColor: "#FFBA08"}}
                >
                </Box>
                <p>yellow</p>
            </MenuItem>
            <MenuItem>
                <Box sx={{ width: "2vh", height: "2vh", backgroundColor: "#145C9E"}}
                >
                </Box>
                <p>blue</p>
            </MenuItem>
            <MenuItem>
                <Box sx={{ width: "2vh", height: "2vh", backgroundColor: "#CC59D2"}}
                >
                </Box>
                <p>pink</p>
            </MenuItem>
        </Menu>
      </div>
    );
};

export default ColorMenu;

// CHANGE REDUX STATE BASED ON OPTION SELECTED
// USE THE REDUX STATE ON THE NOTELIST TO RENDER THE APPROPRIATE COLORS 
// DEFAULT IS SET TO ALL SO IT WILL ALWASY REDNDER ALL 