import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles({
    button: {
        left: 0
    },
    list: {
        width: "26vh"
    },
});

const SideMenu = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const reduxNotebook = useSelector((state) => state.notebook);
    const [open, setOpen] = useState(false);
    const [notebooks, setNotebooks] = useState([]);

    useEffect(() => {
        let data = {
            email: props.email
        };
        Axios.post('http://localhost:3002/user/get_notebook_title', data)
        .then((res) => {
            let results = res.data;
            setNotebooks(results);
        });
        
    },[]);


    // Opens and closes Drawer component //
    const toggleDrawer = () => {
        setOpen(!open);
    };

    // Sets Redux global state to the name of the selected notebook //
    const updateNotebook = (title) => {
        dispatch({ type: 'NOTEBOOK_TITLE', payload: title });
        console.log(reduxNotebook);
    };


    return(
        <div>
            <IconButton onClick={toggleDrawer} className={classes.button}>
                <MenuIcon/>
            </IconButton>
            <Drawer
            anchor="left"
            open={open}
            onClose={toggleDrawer}
            >
                    <List className={classes.list}>
                        {notebooks.map((title, idx) => {
                            return(
                                <ListItem button key={idx}>
                                    <p>{title}</p>
                                </ListItem>
                            )
                        })}
                    </List>
            </Drawer>
        </div>
    )
};

export default SideMenu;