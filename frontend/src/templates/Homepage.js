import NavBar from '../components/NavBar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';
import sc from '../assets/sc.png';
import RegisterHome from '../components/RegisterHome';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const useStyles = makeStyles({
    cont: {
        width: "92%",
        margin: "auto",
        height: "60vh",
        //backgroundColor: "#E3E7F2",
    },
    pic: {
        marginTop: "14vh",
        width: "100%",
    },
    features: {
        width: "100%",
        height: "50vh",
        justifyItems: "center",
        backgroundColor: "#E3E7F2"
    },
    overButton: {
        width: "6vh",
        margin: "auto"
    },
    blurb: {
        marginTop: "4vh"
    }
})

const Homepage = () => {
    const classes = useStyles();

    return(
        <div>
            <NavBar/>
            <div className={classes.cont}>
                <Grid container spacing={3}>
                    <Grid item sm={6} md={6} lg={6}>
                        <img src={sc} width="400" className={classes.pic}/>
                    </Grid>
                    <Grid item sm={6} md={6} lg={6}>
                        <Typography variant="h4" sx={{ fontWeight: "600", marginTop: "14vh"}} align="left">quick & effortless - anytime, anywhere</Typography>
                        <br></br>
                        <Typography align="left" variant="h6" sx={{ fontWeight: "400"}}>Note-taking with Markdown and VIM keybinds, for ultimate speed and reliability. Either save it to your account, or download locally to ensure access in any device or any place.</Typography>
                    </Grid>
                </Grid>
            </div>
            <div className={classes.features}>
                <div className={classes.overButton}>
                    <Button sx={{ marginTop: "-1.6vh", backgroundColor: "#E4B363", width: "100%"}} variant="contained">_</Button>
                </div>
                <Typography align="center" variant="h3">Features</Typography>
            </div>
        </div>
    )
};

export default Homepage;