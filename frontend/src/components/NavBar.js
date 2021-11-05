import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography  from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
    nav: {
        backgroundColor: "#0A2533",
    },
    loginButton: {
        backgroundColor: "white",
        marginRight: "2vh"
    },
    signupButton: {
        backgroundColor: "white",
    },
    logo: {
        flexGrow: 1,
        color: "white"
    }
})

const NavBar = () => {
    const navclasses = useStyles();

    return(
        <div>
            <AppBar elevation={0} style={{ background: "#0A2533"}}className={navclasses.nav} position="static">
                <Toolbar>
                    <Typography variant="h4" className={navclasses.logo}>
                        simple-notes 
                    </Typography> 
                    <Link to="/login">
                        <Button style={{ backgroundColor: "#E4B363", marginRight: "2vh", color: "white"}} color="inherit" variant="contained">Log in</Button>
                    </Link>
                    <Link to="/register">
                        <Button style={{ backgroundColor: "#E4B363", color: "white"}} color="inherit" variant="contained">Sign up</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    )

};

export default NavBar;