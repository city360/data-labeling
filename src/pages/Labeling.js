import Box from '@mui/material/Box';
import * as React from 'react';
import FolderCard from "../components/FolderCard";

/**
 * 显示多个文件夹，选择文件夹打标签
 * @param props
 * @constructor
 */
export default function Labeling(props) {
  const folders = [{name: '1', label: 'label1'},
    {name: '2', label: 'label2'},
    {name: '3', label: ''},
    {name: '4', label: ''},
    {name: '5', label: ''},
    {name: '6', label: ''},
    {name: '7', label: 'label3'}];
  return (
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
          return (<FolderCard name={folder.name} label={folder.label} key={folder.name}/>)
        })}
      </Box>

  )
}
