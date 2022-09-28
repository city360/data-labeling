import Paper from "@mui/material/Paper";
import folderSvg from "../assets/folder.svg";
import Typography from "@mui/material/Typography";
import {Button, Chip, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import {getPics, labelData} from "../axios";
import {useEffect, useState} from "react";

/**
 * 文件夹卡片
 * @param props
 * @constructor
 */
export default function FolderCard(props) {

  const [open, setOpen] = React.useState(false);

  const [label, setLabel] = React.useState('');

  /**
   * 传入文件夹的名字，得到文件夹下面图片的路径
   * @param name
   */
  const handleOpen = (name) => {
    setOpen(true)
    // console.log(name)
  };
  const handleClose = () => {
    labelData(props.name, label).then((res) => console.log(res));
    setOpen(false);
  }
  const handleChange = (event) => {
    setLabel(event.target.value);
  };

  const getLabel = function (label) {
    switch (label) {
      case 'label1':
        return ('success');
      case 'label2':
        return ('primary');
      case 'label3':
        return ('secondary');
      default:
        return ('error')
    }
  };


  const pics = ['http://mms2.baidu.com/it/u=1728392617,141928255&fm=253&app=138&f=JPEG&fmt=auto&q=75?w=500&h=500',
    'http://mms2.baidu.com/it/u=1728392617,141928255&fm=253&app=138&f=JPEG&fmt=auto&q=75?w=500&h=500',
    'http://mms2.baidu.com/it/u=1728392617,141928255&fm=253&app=138&f=JPEG&fmt=auto&q=75?w=500&h=500',
    'http://mms2.baidu.com/it/u=1728392617,141928255&fm=253&app=138&f=JPEG&fmt=auto&q=75?w=500&h=500',
    'http://mms2.baidu.com/it/u=1728392617,141928255&fm=253&app=138&f=JPEG&fmt=auto&q=75?w=500&h=500',
    'http://mms2.baidu.com/it/u=1728392617,141928255&fm=253&app=138&f=JPEG&fmt=auto&q=75?w=500&h=500',
    'http://mms2.baidu.com/it/u=1728392617,141928255&fm=253&app=138&f=JPEG&fmt=auto&q=75?w=500&h=500',
    'http://mms2.baidu.com/it/u=1728392617,141928255&fm=253&app=138&f=JPEG&fmt=auto&q=75?w=500&h=500',
    'http://mms2.baidu.com/it/u=1728392617,141928255&fm=253&app=138&f=JPEG&fmt=auto&q=75?w=500&h=500']


  // const baseUrl = "http://localhost:5000/pic/"+props.name+'/';
  // const pics = ['0.jpg','1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'].map((pic)=>{
  //   return(baseUrl+pic)
  // })

  // const [pics, setPics] = useState([]);
  // useEffect(() => {
  //   getPics(props.name).then(data => setPics(data));
  // }, [])

  return (<Paper elevation={1}>
    <center>
      <img src={folderSvg} height={'150px'} alt={"文件夹图片"}/>
    </center>
    <Typography variant="h6" component="div" color="text.secondary">
      <center>
        {/*<Chip color={''}*/}
        {props.name} <Chip label={label ? label : "label it"} color={getLabel(label)} onClick={() => {
        handleOpen(props.name)
      }}/>
      </center>
    </Typography>
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth={true}
        maxWidth={'lg'}
    >
      <DialogTitle id="alert-dialog-title">
        {"Please help me label the data 🥺"}
      </DialogTitle>
      <DialogContent>
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
          {pics.map((pic,index) => {
            return (
                <Paper key={index}>
                  {/*<img src={baseUrl + pic} height={'200px'} width={'200px'} alt={"视频帧图片"}/>*/}
                  <img src={pic} height={'200px'} width={'200px'} alt={pic}/>
                </Paper>)
          })}
        </Box>
      </DialogContent>
      <DialogActions>
        <FormControl>
          <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={label}
              onChange={handleChange}
          >
            {/*Todo*/}
            <FormControlLabel value="label1" control={<Radio/>} label="label1"/>
            <FormControlLabel value="label2" control={<Radio/>} label="label2"/>
            <FormControlLabel value="label3" control={<Radio/>} label="label3"/>
          </RadioGroup>
        </FormControl>
        {/*{value}*/}
        <Button onClick={handleClose} variant={'contained'} autoFocus>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  </Paper>)
}
