import MarkdownView from '../components/MarkdownView';
import NoteList from '../components/NoteList';
import Grid from '@mui/material/Grid';
import { useHistory } from 'react-router';
import { useEffect } from 'react';
import Axios from 'axios';

function Main() {
  const history = useHistory();
  const state = history.location.state;

  useEffect(() => {
    let data = { email : state};

    Axios.post('http://localhost:3002/user/get_data', data)
    .then((res) => console.log(res));
  },[]);

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