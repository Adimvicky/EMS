import React, { Component } from 'react';
import { derivative } from 'mathjs';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { Button,Typography,Divider } from '@material-ui/core';
import Aux from '../../../containers/Auxiliary/Auxiliary';
import DialogSelect from './DiffModal.js';

import appClasses from '../../../../App.module.css';


class Differentiation extends Component {
    state = {
        expression : '',
        derivative : ''
    }
    handleExpressionChange = (e) => {
        this.setState({expression : e.target.value});
    }
    render(){
        return (
            <Aux>
                <Typography variant="h5" gutterBottom>
                    Calculus 
                </Typography>
                <form>
                    <TextField
                    //id="outlined-full-width"
                    label="Expression"
                    defaultValue=""
                    margin="normal"
                    variant="outlined"
                    onChange={(e) => this.handleExpressionChange(e)}
                    className={`${appClasses.W3} ${appClasses.MB2}`}
                    />
                    <DialogSelect expression={this.state.expression}/>
                    <Typography variant="h6" gutterBottom className={appClasses.M3}>
                        {this.state.derivative}
                    </Typography>
                </form>
    
            </Aux>
        )
    }
}

    
export default Differentiation;


