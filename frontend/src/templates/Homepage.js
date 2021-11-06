import NavBar from '../components/NavBar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';
import sc from '../assets/sc.png';
import RegisterHome from '../components/RegisterHome';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import IconButton from '@mui/material/IconButton';
import feat1 from '../assets/feat1.jpg';
import feat2 from '../assets/feat2.jpg';
import feat3 from '../assets/feat3.jpg';


const useStyles = makeStyles({
    cont: {
        width: "92%",
        margin: "auto",
        paddingTop: "3vh",
    },
    cont2: {
        width: "52%",
        margin: "auto",
        paddingTop: "3vh",
    },
    pic: {
        width: "100%",
        borderRadius: "5px",
        marginTop: "2vh"
    },
    features: {
        width: "100%",
        height: "50vh",
        justifyItems: "center",
        backgroundColor: "#E3E7F2",
        marginTop: "10vh"
    },
    overButton: {
        width: "12vh",
        margin: "auto",
        display: "flex",
        justifyContent: "center"
    },
    blurb: {
        marginTop: "4vh"
    },
    featureText: {
        margin: "5vh"
    },
    featImg: {
        borderRadius: "8px"
    }
})

const Homepage = () => {
    const classes = useStyles();

    return(
        <div>
            <NavBar/>
            <div className={classes.cont}>
                <Grid container spacing={3}>
                   
                
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Typography variant="h4" sx={{ fontWeight: "400", marginTop: "5vh"}} align="center">YOUR NOTES - ANYTIME, ANYWHERE</Typography>
                        <br></br>
                        <Typography align="left" variant="h6" sx={{ fontWeight: "400"}}>Note-taking made easy with Markdown and VIM keybinds, for ultimate speed and reliability. Either save it to your account, or download locally to ensure access in any device or any place.</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <img src={sc} width="400" className={classes.pic}/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} style={{textAlign: "center"}}>
                        <Button sx={{ backgroundColor: "#E4B363", color: "white", marginTop: "5vh"}} variant="contained">try it out today</Button>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} style={{textAlign: "center", marginTop: "10vh"}}>
                        <IconButton color="inherit">
                            <ArrowDownwardIcon sx={{ width:"4vh", height: "4vh", backgroundColor: "#E4B363", borderRadius: "100%", color: "white"}}/>
                        </IconButton>
                    </Grid>
                </Grid>
            </div>
     

            <Typography align="center" sx={{ marginTop: "13vh", marginBottom: "5vh", textAlign: "center" }} variant="h3">Features</Typography>
            <div className={classes.cont2}>
                <Grid container spacing={3} sx={{ alignItems: "center", justifyContent: "center"}}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Typography variant="h5">VIM Keybinds</Typography>
                        <Typography variant="body">A web-based alternative to ensure a familiar environment. Either to quickly jot down lecture notes, or to draft an important company email.</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <img className={classes.featImg} width="300"src={feat2}/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Typography variant="h5">Markdown Editor</Typography>
                        <Typography variant="body">Ensuring a familiar environment to quickly jot down lecture notes, or to draft an important company email.</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <img className={classes.featImg} width="300"src={feat1}/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Typography variant="h5">Download Locally</Typography>
                        <Typography variant="body">Ensuring a familiar environment to quickly jot down lecture notes, or to draft an important company email.</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <img className={classes.featImg} width="300"src={feat3}/>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
};

export default Homepage;