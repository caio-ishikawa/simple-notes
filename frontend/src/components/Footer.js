import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <footer>
        <Box
          px={{ xs: 3, sm: 10 }}
          py={{ xs: 5, sm: 10 }}
          bgcolor="#0A2533"
          color="white"
          height="10vh"
        >
          <Container maxWidth="lg">
            <Grid container spacing={5}>
              <Grid item xs={12} sm={4}>
                <Box borderBottom={1}>Help</Box>
                <Box>
                    Contact
                </Box>
                <Box>
                    Support
                </Box>
                <Box>
                    Privacy
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box borderBottom={1}>Account</Box>
                <Box>
                    Login
                </Box>
                <Box>
                    Register
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box borderBottom={1}>Messages</Box>
                <Box>
                    Backup
                </Box>
                <Box>
                    History
                </Box>
                <Box>
                    Roll
                </Box>
              </Grid>
            </Grid>
            <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
              simple-notes &reg; {new Date().getFullYear()}
            </Box>
          </Container>
        </Box>
      </footer>
       
    )
};

export default Footer;