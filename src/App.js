import './App.css';
import TodoList from  "./component/TodoLists/TodoList";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
function App() {
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs >
          {/* <Item>xs</Item> */}
        </Grid>
        <Grid item xs={6}>
        <TodoList/>
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
