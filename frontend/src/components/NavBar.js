import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography  from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
    nav: {
        backgroundColor: "#EBEAEB",
    },
    loginButton: {
        backgroundColor: "#202030",
        marginRight: "2vh"
    },
    signupButton: {
        backgroundColor: "#202030",
    },
    logo: {
        flexGrow: 1,
        color: "#202030"
    }
})

const NavBar = () => {
    const navclasses = useStyles();

    return(
        <div>
            <AppBar elevation={0} style={{ background: "#EBEAEB"}}className={navclasses.nav} position="static">
                <Toolbar>
                    <Typography variant="h4" className={navclasses.logo}>
                        simple-notes 
                    </Typography> 
                    <Link to="/login">
                        <Button style={{ backgroundColor: "#202030", marginRight: "2vh"}} color="inherit" variant="contained">Log in</Button>
                    </Link>
                    <Link to="/register">
                        <Button style={{ backgroundColor: "#202030"}} color="inherit" variant="contained">Sign up</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    )

};

export default NavBar;