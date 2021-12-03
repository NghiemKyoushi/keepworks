import './App.css';
import Navbar from './component/Navbar';
import AddWork from  "../src/component/addList/AddWork";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
function App() {
  return (
    <div className="App">
      {/* <Navbar/>
      <AddWork/> */}
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs >
          {/* <Item>xs</Item> */}
        </Grid>
        <Grid item xs={6}>
        <AddWork/>
         </Grid>
        <Grid item xs>
          {/* <Item>xs</Item> */}
        </Grid>
      </Grid>
    </Box>
    </div>
  );
}

export default App;
