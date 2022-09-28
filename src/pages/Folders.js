import Box from '@mui/material/Box';
import * as React from 'react';
import FolderCard from "../components/FolderCard";
import {getFolders} from "../axios";
import {useEffect, useState} from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import {Button, ThemeProvider} from "@mui/material";
import {createTheme} from "@mui/material/styles";
import {useNavigate} from "react-router-dom";


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#B4EDE7',
    },
  },
});
/**
 * 显示多个文件夹，选择文件夹打标签
 * @param props
 * @constructor
 */
export default function Folders(props) {
  // const folders = [{name: '1', label: 'label1'},
  //   {name: '2', label: 'label2'},
  //   {name: '3', label: ''},
  //   {name: '4', label: ''},
  //   {name: '5', label: ''},
  //   {name: '6', label: ''},
  //   {name: '7', label: 'label3'}];
  const [folders, setFolders] = useState([])

  const navigate = useNavigate();
  useEffect(() => {
    getFolders().then((data) => {
      setFolders(data);
      console.log(data)
    });
  }, [])


  return (
      <Box sx={{ flexGrow: 1 }}>
        <ThemeProvider theme={darkTheme}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Data Labeling
              </Typography>
              <Button style={{backgroundColor:'white',color:'black'}} onClick={()=>{
                navigate("/");
              }}>Job Finished</Button>
            </Toolbar>
          </AppBar>
        </ThemeProvider>

        <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              '& > :not(style)': {
                m: 1,
                width: 200,
                height: 200,
              },
            }}
        >
          {folders.map((folder, index) => {
            return (<FolderCard name={folder} key={index}/>)
          })}
        </Box>
      </Box>

  )
}
