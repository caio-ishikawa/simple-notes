import NavBar from '../components/NavBar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    cont: {
        width: "80%",
        margin: "auto",
        paddingTop: "5vh",
        height: "40vh"
    },
    title: {
    }
})

const Homepage = () => {
    const classes = useStyles();

    return(
        <div>
            <NavBar/>
                <div className={classes.cont}>
                    <Typography align="center" variant="h4">
                        IMAGE GOES HERE
                    </Typography>
                    <br></br>
                    <Typography align="center" variant="subtitle1">
                        Revolutionizing note-taking by providing an easy platform for writing in markdown, both for speed and readability. 
                    </Typography>
                </div>
                <div>
                    <Typography align="center" variant="h4">
                        Features
                    </Typography>
                </div>
        </div>
    )
};

export default Homepage;