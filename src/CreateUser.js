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

const CreateUer = () => {
    const useStyles = makeStyles(theme => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
          },
        },
      }));
      
      
        const [fname, setFname] = React.useState('');
        const [lname, setLname] = React.useState('');
        const [email, setEmail] = React.useState('');
        const [address,setAddress] = React.useState('');
        
        const classes = useStyles();
      
        const handleFname = event => {
            setFname(event.target.value);
        };
        const handleLname = event => {
            setLname(event.target.value);
          };
          const handleEmail = event => {
            setEmail(event.target.value);
          };
          const handleAddress = event => {
            setAddress(event.target.value);
          };
          const handleclick = () => {
            fetch("http://localhost:8000/api/users", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                firstname: fname,
                lastname: lname,
                email: email,
                address: address
              })
            });
          };
    return (
        
        <Box  p={6}>
        <GridListTileBar > </GridListTileBar>
            <h3> Registration</h3>
        <form className={classes.root}  noValidate autoComplete="off">
         <br/>
        <TextField id="outlined-basic" label="First Name" variant="outlined" 
        value={fname} onChange={handleFname} 
        />
       <br/>
       <TextField id="outlined-basic" label="Last Name" variant="outlined" 
        value={lname} onChange={handleLname} 
        />
          <br/>
       <TextField id="outlined-basic" label="Email Address" variant="outlined" 
        value={email} onChange={handleEmail} 
        />
        <br/>
        <TextField id="outlined-basic" label="Address" variant="outlined" 
        value={address} onChange={handleAddress} 
        />
        <br/>
        <Link to={`/`}>
        <Button variant="contained" color="primary" onClick ={handleclick}>
        Submit
        </Button>
        </Link>
          </form>
          </Box>

  );
};

export default CreateUer;
