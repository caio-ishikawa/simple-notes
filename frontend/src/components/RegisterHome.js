import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    field: {
        backgroundColor: "white",
        borderRadius: "4px",
        width: "90%",
    },
    box: {
        height: "37.5%",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        justifyContent: "center",
        position: "relative",
        width: "25vh",
        marginRight: "2vh",
        marginTop:"3vh",
        padding: "2vh",
        borderRadius: "10px",
        float: "right"

    },
    vertCenter: {
        position: "absolute",
    }
});

const RegisterHome = () => {
    const classes = useStyles();

    return (
        <div className={classes.box}>
            <div className={classes.vertCenter}>
                <TextField size="small" className={classes.field} placeholder="Username"/>
                <br></br>
                <br></br>
                <TextField size="small" className={classes.field} placeholder="Email"/>
                <br></br>
                <br></br>
                <TextField size="small" className={classes.field} placeholder="Password"/>
                <br></br>
                <br></br>
                <Button variant="contained" color="inherit">Get started today!</Button>
                <br></br>
                <br></br>
                <Typography style={{color: "white"}} variant="subtitle2">
                    Already have an account? Click <Link to="/login">here to login.</Link>
                </Typography>
            </div>
        </div>
    )
};

export default RegisterHome;