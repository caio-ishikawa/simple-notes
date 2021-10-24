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
                <List component="nav" aria-label='test'>
                    <ListItemButton onClick={(e) => handleList(e, 0)} selected={selectedIndex === 0}>
                        <ListItemText>
                            Test
                        </ListItemText>
                    </ListItemButton>
                    <ListItemButton onClick={(e) => handleList(e, 1)} selected={selectedIndex === 1}>
                        <ListItemText>
                            Test 2
                        </ListItemText>
                    </ListItemButton>
                </List>
            </Box>
        </div>
    )

};

export default NoteList;