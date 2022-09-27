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

/**
 * 文件夹卡片
 * @param props
 * @constructor
 */
export default function FolderCard(props) {
  const pics = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const [open, setOpen] = React.useState(false);
  /**
   * 传入文件夹的名字，得到文件夹下面图片的路径
   * @param name
   */
  const handleOpen = (name) => {
    setOpen(true)
    console.log(name)
  };
  const handleClose = () => setOpen(false);
  const [label, setLabel] = React.useState(props.label);
  const handleChange = (event) => {
    setLabel(event.target.value);
  };

  const getLabel = function (label) {
    switch (label){
      case 'label1':
        return('success');
      case 'label2':
        return('primary');
      case 'label3':
        return('info');
      default:
        return('error')
    }
  }
  return (<Paper elevation={1}>
    <center>
      <img src={folderSvg} height={'150px'}/>
    </center>
    <Typography variant="h6" component="div" color="text.secondary">
      <center>
        {/*<Chip color={''}*/}
        {props.name} <Chip label={label ? label : "label it"} color={getLabel(label)} onClick={() => {handleOpen(props.name)}}/>
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
          {pics.map((pic) => {
            return (
                <Paper key={pic}>
                  <img src={'/robot.svg'}/>
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
