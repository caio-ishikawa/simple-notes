import MarkdownView from '../components/MarkdownView';
import NoteList from '../components/NoteList';
import Grid from '@mui/material/Grid';
import { useHistory } from 'react-router';


function Main() {
  const history = useHistory();
  const state = history.location.state;

    return (
      <div>
        <Grid container spacing={0}>
          <Grid item xs={12} md={3} lg={2}>
            <NoteList email={state}/>
          </Grid>
          <Grid item xs={12} md={9} lg={10}>
          <MarkdownView email={state}/>
          </Grid>
        </Grid>
      </div>
  
    );
  }
  
  export default Main;