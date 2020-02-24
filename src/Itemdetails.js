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

import MaterialTable from 'material-table';


const Itemdetails = () => {
    const useStyles = makeStyles(theme => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
          },
        },
      }));

      let [state, setState] = React.useState({
        columns: [
          { title: 'Item Description', field: 'item_desc' },
          { title: 'Quantity', field: 'quantity' , type: 'numeric' },
          { title: 'Unit Price', field: 'unit_price', type: 'numeric' }
          
        ],
           });

           var [items, setItems] = React.useState('');
           useEffect(() => {
            fetch("http://localhost:8000/api/items")
              .then(res => res.json())
              .then(res => setItems(res))
              .catch(err => console.log(err));
                  });
                 return (
                    <div>
                {console.log(items)}  
{items?
<MaterialTable
      title="Item Details "
      columns={state.columns}
      data={items}
    />
 : <div> </div>}


          </div>
  );
};

export default Itemdetails;
