import React, { useEffect } from "react";
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

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';




const CreateEvent = () => {
    const useStyles = makeStyles(theme => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
          },
        },
      }));
        
     const [itemdesc,  setItemdesc] = React.useState('');
     const [itemquantity,  setItemquantity] = React.useState('');
     const [priceunit,  setPriceunit] = React.useState('');
     const [items, setItems] = React.useState('');
     
    

    const classes = useStyles();
    const handlepriceunit = event => {
        setPriceunit(event.target.value);
        };
    const handleitemdesc = event => {
            setItemdesc(event.target.value);
        };

        const handleitemquantity = event => {
            setItemquantity(event.target.value);
        };

          const handleclick = () => {
            fetch("http://localhost:8000/api/items", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                item_desc:itemdesc,
                quantity: itemquantity,
                unit_price : priceunit,
                         
              })
            });

          // fetching the records from DB
          fetch("http://localhost:8000/api/items")
          .then(res => res.json())
          .then(res => {
              setItems(res)
            }
                   )
          .catch(err => console.log(err));
          
        

          };

          

                  
    return (
        <div>
        <Box  p={6} border = {1} borderRadius={16} m={2} > 
        
            <h3> Create Items for the event </h3>
        <form className={classes.root}  noValidate autoComplete="off">
         
        <TextField id="outlined-basic" label="Item Description" variant="outlined" 
        value={itemdesc} onChange={handleitemdesc} 
        />
              <TextField id="outlined-basic" label="Quantity" variant="outlined" 
        value={itemquantity} onChange={handleitemquantity} 
        />
        <TextField id="outlined-basic" label="Price per unit" variant="outlined" 
        value={priceunit} onChange={handlepriceunit} 
        />
        <Button variant="contained" color="primary" size = "medium" onClick ={handleclick}>
        Create Items
        </Button>
        
       
        </form>
     
     </Box>

                          
                     <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="caption table">
        <caption>List of Items</caption>
        <TableHead>
          <TableRow>
            <TableCell align="right">item description</TableCell>
            <TableCell align="right">quantity</TableCell>
            <TableCell align="right">unit price</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {items ? items.map(rows => (
             <TableRow key={rows._id}>
             <TableCell component="th" scope="row">
               {rows.item_desc}
             </TableCell>
              <TableCell align="right">{rows.quantity}</TableCell>
             <TableCell align="right">{rows.unit_price}</TableCell> 
              
           </TableRow>
         )) : <div> </div>}
        </TableBody>
      </Table>
    </TableContainer>







          </div>
  );
};

export default CreateEvent;
