
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Typography } from '@material-ui/core';

import { create, all } from 'mathjs';
import mathjsSimpleIntegral from 'mathjs-simple-integral';

//import { create, all } from 'mathjs'
const math = create(all);
math.import(mathjsSimpleIntegral);

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function DialogSelect(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    open: false,
    wrtVariable: '',
    order : 0,
    answer : ''
  });

  function handleClickOpen() {
    setState({ ...state, open: true });
  }

  function handleClose() {
    setState({ ...state, open: false });
  }

  function handleWrtChange(e){
        setState({...state,wrtVariable : e.target.value});
  }
  function handleOrderChange(e){
        setState({...state,order : e.target.value});
  }

  function evaluateCalculus(type){
    // param type is either differentiation or integration
    if(props.expression && state.wrtVariable && state.order){
      let answer = math[type](props.expression,state.wrtVariable).toString();
      for(let i=0;i<state.order - 1;i++){
          answer = math[type](answer,state.wrtVariable).toString();
      }
      setState({...state,answer : answer})
    }
  }
  function findDerivative(){
      evaluateCalculus('derivative')
  }

  function findIntegral(){
      evaluateCalculus('integral')
  }


 // Extracts variables from expression
  let strings = props.expression.split('');
  let variables = [];
  let characters = /^[a-zA-Z]+$/;
  for(let string of strings){
      if(string.match(characters)){
          variables.push(string)
      }
  }
  // Exclude functions like cos,sin,tan
  let functionStrings = ['cos','sinh','sin','tan','asin','acos','acosh',
  'acot','acoth','acsc','acsh','asec','asech','asinh','atan','atan2'
  ,'cot','cosh','csch','csc','sec','sech','log','exp',
];

  for(let functionString of functionStrings){
      let num = 0
      if(variables.join('').includes(functionString)){
        console.log(functionString,num++,variables.join(''))
          variables.splice(variables.join('').indexOf(functionString),functionString.length)
      } 
  }
  // Remove repeating characters
  let updatedVariables = [];
  for(let char of variables){
      if(!(updatedVariables.includes(char))){
          updatedVariables.push(char);
      }
  }
  variables = updatedVariables;

  return (
    <div>
      <Button onClick={handleClickOpen} variant="contained" color="primary">Continue</Button>
      <Dialog disableBackdropClick disableEscapeKeyDown open={state.open} onClose={handleClose}>
        <DialogTitle>Calculus</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="wrt">With respect to</InputLabel>
              <Select
                value={state.wrtVariable}
                onChange={(e) => handleWrtChange(e)}
                input={<Input id="wrt" />}
              >
                <MenuItem value="" />
                {variables.map((variable) => <MenuItem value={variable} key={variable}>{variable}</MenuItem>)}
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="order">Order</InputLabel>
              <Select
                value={state.order}
                onChange={(e) => handleOrderChange(e)}
                input={<Input id="order" />}
              >
                <MenuItem value="" />
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
              </Select>
            </FormControl>            
          </form>
          
          <div className={classes.formControl}>
            <Button onClick={findDerivative} variant="contained" color="primary" className={classes.button}>
               Differentiate
            </Button>
            <Button onClick={findIntegral} variant="contained" color="secondary" className={classes.button}>
                Integrate
            </Button>
            </div>

          <Typography variant='h6'>
              {state.answer ? `Answer = ${state.answer}` : null}
          </Typography>
        </DialogContent>
        
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Back
          </Button>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


