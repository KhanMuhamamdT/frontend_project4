import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { spacing } from '@material-ui/system';
import { Box } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { GridListTileBar } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
const CreateEvent = () => {
    const useStyles = makeStyles(theme => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
          },
        },
      }));
            
const [eventdesc, setEventdesc] = React.useState('');
const [eventurl,  setEventurl] = React.useState('');
const [status,setStatus] = React.useState('');
const [closetime,setClosetime] = React.useState('');
const [opentime,setOpentime] = React.useState('');
const [eventdate,setEventdate] = React.useState('');
const classes = useStyles();
  const handleopentime = event => {
      setOpentime(event.target.value);
    };
   const handleclosetime = event => {
      setClosetime(event.target.value);
        };
    const handleeventdate = event => {
      setEventdate(event.target.value);
        };
    const handleeventdesc = event => {
      setEventdesc(event.target.value);
        };
    const handleimgurl = event => {
        setEventurl(event.target.value);
        };

    const handlemenustatus = event => {
        setStatus(event.target.value);
        };
    const handleclick = () => {
       fetch("http://localhost:8000/api/events", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                event_name:eventdesc,
                event_url: eventurl,
                event_date : eventdate,
                event_start_time: opentime,
                event_end_time :closetime ,
                status: status
                
              })
            });
          };
    return (
        
        <Box  p={6} border = {1} borderRadius={16} m={2} > 
        <GridListTileBar > </GridListTileBar>
            <h3> Create Event</h3>
          <form className={classes.root}  noValidate autoComplete="off">
              <TextField id="outlined-basic" label="Event Description" variant="outlined" 
               value={eventdesc} onChange={handleeventdesc} 
                />
              <TextField id="outlined-basic" label="Image URL" variant="outlined" 
                 value={eventurl} onChange={handleimgurl} 
              />
            <TextField id="datetime-local"
                variant="outlined" 
                label="EventDate"
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                className={classes.textField}
                value = {eventdate}
                onChange={handleeventdate}
                InputLabelProps={{
                shrink: true,
                }}
            />
          <TextField
                id="time"
                label="Start Time"
                type="time"
                variant="outlined" 
                defaultValue="07:30"
                className={classes.textField}
                value = {opentime}
                onChange={handleopentime}
                InputLabelProps={{
                  shrink: true,
                }}
                
              />

        <TextField
              id="time"
              label="Close Time"
              type="time"
              defaultValue="07:30"
              variant="outlined" 
              className={classes.textField}
              value = {closetime}
              onChange={handleclosetime}
              InputLabelProps={{
                shrink: true,
              }}
              
            />
        <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel  id="demo-simple-select-outlined-label">
              Status
              </InputLabel>
          <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined" label="Address"
              value={status}
              onChange={handlemenustatus}
              variant="outlined" 
            >
              <MenuItem value="">
                  <em>None</em>
              </MenuItem>
              <MenuItem value={'Open'}>Open</MenuItem>
              <MenuItem value={'Close'}>Close</MenuItem>
              <MenuItem value={'Pending'}>Pending</MenuItem>
          </Select>
      </FormControl>
      <Link to={`/create-items`}>
        <Button variant="contained" color="primary" size = "medium" onClick ={handleclick}>
        Create Event
        </Button>
        </Link>
          </form>
          </Box>
  );
};
export default CreateEvent;
