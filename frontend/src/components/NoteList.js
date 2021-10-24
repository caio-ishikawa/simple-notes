import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react';

const NoteList = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleList = (e, index) => {
        setSelectedIndex(index);
        console.log(index);
    };

    return (
        <div>
            <Box>
                <p>test util box</p>
            </Box>
            <Box>
                <List component="nav" aria-label='test'>
                    <ListItemButton onClick={(e) => handleList(e, 0)} selected={selectedIndex === 0}>
                        <ListItemText primary="note title" secondary="date"/>
                    </ListItemButton>
                    <ListItemButton onClick={(e) => handleList(e, 1)} selected={selectedIndex === 1}>
                        <ListItemText primary="note title" secondary="date"/>
                    </ListItemButton>
                </List>
            </Box>
        </div>
    )

};

export default NoteList;