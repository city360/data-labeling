import * as React from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import {HashRouter, Link, Route, useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CircularProgress, {
  circularProgressClasses,
} from '@mui/material/CircularProgress';
import { ThemeProvider, createTheme } from '@mui/material/styles';

//导入机器人动图
import robotGif from './assets/robot.gif';
import Labeling from "./pages/Labeling";


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#B4EDE7',
    },
  },
});

const greenTheme = createTheme({
  palette: {
    primary: {
      main: '#1FC1B0',
    },
  },
});
function CircularProgressWithLabel(props) {
  return (
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>

        <CircularProgress variant="determinate" {...props} />
        <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
        >
          <Typography variant="caption" component="div" color="text.secondary">
            {`${Math.round(props.value)}%`}
          </Typography>
        </Box>
      </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

function App(props) {
  const navigate = useNavigate();
  const [progress, setProgress] = React.useState(80);
  setTimeout(()=>{
    navigate('/label')
  },1600)
  React.useEffect(() => {
    console.log('classComponent：componentDidMount')
    const timer = setInterval(() => {
        setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);
    return () => {
      console.log("调用了这个清除器")
      console.log(progress)
      clearInterval(timer);
    };
  }, []);

  return (
      <Box sx={{ flexGrow: 1 }}>
        <div id={'label'} style={{display:'none'}} onClick={()=>{console.log("ok")}}>
          <Link to={'/label'}/>
        </div>
        {/*<Link to={'/label'} style={{display:'none'}}*/}
        {/*<a id={'label'} style="display: none" href='/label'/>*/}
        <ThemeProvider theme={darkTheme}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Data Labeling
              </Typography>
            </Toolbar>
          </AppBar>
        </ThemeProvider>

        <div>
          <center>
            <img src={robotGif} alt={"机器人"} height={'300'} style={{marginTop:'30px'}}/>
          </center>
          <center>
            <Typography variant="h6" component="div" color="text.secondary" marginBottom={'50px'}>
              The data collecting progress:
            </Typography>
            <ThemeProvider theme={greenTheme}>
              <CircularProgressWithLabel value={progress}/>
            </ThemeProvider>

          </center>
        </div>

      </Box>
  );
}

export default App;
