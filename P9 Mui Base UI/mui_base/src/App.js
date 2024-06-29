import { Typography, Button, TextField } from "@mui/material";
function App() {
  return (
    <>
      <Typography variant="h1" sx={{ color: "royalblue" }}>
        Sahil
      </Typography>
      <Button variant="contained">b1</Button>
      <Button variant="text">b2</Button>
      <Button variant="outlined">b3</Button>

      <Button variant="contained" color="success" sx={{margin: "50px" }}>b4</Button>
      <Button variant="outlined" onClick={()=>{alert("You now click to me")}}>b5 click me</Button>

      <br></br>
      <input type="text" placeholder="Enter Your Name"/>
      <TextField type="text" placeholder="Enter your Name" variant="standard"/>
      <TextField type="text" placeholder="Enter your Name" variant="outlined"/>
      <TextField type="text" placeholder="Enter your Name" variant="filled"/>

    </>
  );
}

export default App;
