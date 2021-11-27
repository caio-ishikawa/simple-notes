import { useState } from 'react';
import { useHistory } from 'react-router';
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
})

const Login = () => {
    Axios.defaults.withCredentials = true;
    const classes = useStyles();
    const history = useHistory();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const getUsername = (e) => {
        setUsername(e.target.value);
    };

    const getPassword = (e) => {
        setPassword(e.target.value);
    };

    const submitData = () => {
        const data = {
            username: username, 
            password: password
        };
        Axios.post('http://localhost:3002/auth/login', data)
        .then((res) => {
            console.log(res);
            history.push({
                pathname: '/notes',
                state: res.data
            })
        });
    };

    return(
        <div>
            <Grid container spacing={1}>
                <Grid item xs={12} md={4} lg={4}>
                    <div className={classes.loginCont}>
                        <div className={classes.title}>
                            <Typography variant="h4">
                                simple-notes
                            </Typography>
                        </div>
                        <TextField className={classes.textBox} variant="standard" placeholder="Username" onChange={(e) => getUsername(e)}/>
                        <TextField type="password" className={classes.textBox} variant="standard" placeholder="Password" onChange={(e) => getPassword(e)}/>
                        <br></br>
                        <br></br>
                        <Button variant="contained" color="inherit" className={classes.submitButton} onClick={submitData}>Log in</Button>
                        <br></br>
                        <br></br>
                        <Typography variant="subtitle2">
                            Don't have an account yet? Click <Link to="/register">here to sign up.</Link>
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

export default Login;