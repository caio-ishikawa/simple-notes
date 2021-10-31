import { useState } from 'react';
import Axios from 'axios';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    textBox: {
        width: "80%",
        marginTop: "10%"
    },
    submitButton: {
    },
    loginCont: {
        margin: "2vh"
    },
    title: {
        marginBottom: "2vh"
    },
    space: {
        height: "100vh",
        width: "100%",
        backgroundColor: "black"
    }
});

const Register = () => {
    const classes = useStyles();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();

    const getUsername = (e) => {
        setUsername(e.target.value);
    };

    const getPassword = (e) => {
        setPassword(e.target.value);
    };

    const getEmail = (e) => {
        setEmail(e.target.value);
    };

    const submitData = () => {
        const data = {
            username: username,
            email: email,
            password: password
        };
        Axios.post('http://localhost:3002/auth/register', data)
        .then((res) => console.log(res));
    };

    return(
        <div>
            <Grid container spacing={0}>
                <Grid item xs={12} md={4} lg={3}>
                    <div className={classes.loginCont}>
                        <div className={classes.title}>
                            <Typography variant="h4">
                                simple-notes
                            </Typography>
                        </div>
                        <TextField className={classes.textBox} variant="standard" placeholder="username" onChange={(e) => getUsername(e)}/>
                        <br></br>
                        <TextField className={classes.textBox}  variant="standard" placeholder="password" onChange={(e) => getPassword(e)}/>
                        <br></br>
                        <TextField className={classes.textBox}  variant="standard" placeholder="email" onChange={(e) => getEmail(e)}/>

                        <br></br>
                        <br></br>
                        <Button variant="contained" color="inherit" onClick={submitData}>Sign up</Button>
                        <br></br>
                        <br></br>
                        <Typography variant="subtitle2">
                            Already have an account? Click <Link to="/login">here to login.</Link>
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={0} md={8} lg={8}>
                    <div className={classes.space}></div>
                </Grid>
            </Grid>
        </div>
    )
};

export default Register;