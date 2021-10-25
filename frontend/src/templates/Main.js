import MarkdownView from '../components/MarkdownView';
import NoteList from '../components/NoteList';
import Grid from '@mui/material/Grid';

function Main() {

    return (
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} lg={4}>
            <NoteList/>
          </Grid>
          <Grid item xs={12} md={8} lg={8}>
          <MarkdownView/>
          </Grid>
        </Grid>
      </div>
  
    );
  }
  
  export default Main;