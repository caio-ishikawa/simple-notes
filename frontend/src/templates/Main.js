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
          <Grid item xs={12} md={4} lg={4}>
            <NoteList email={state}/>
          </Grid>
          <Grid item xs={12} md={8} lg={8}>
          <MarkdownView email={state}/>
          </Grid>
        </Grid>
      </div>
  
    );
  }
  
  export default Main;