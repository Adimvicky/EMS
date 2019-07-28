import React from 'react';
import { Paper,Typography } from '@material-ui/core';
import classes from './Home.module.css';

const Home = (props) => {
    return (
        <Paper className={classes.p1}>
            <Typography variant="h5" component="h3" className={classes.p2}>
                Hey there! Howdy?
            </Typography>
            <Typography component="h4">
                Engineering Math Suite is a full suite of Engineering math functions, computational
                algorithms and ... ...  .. . .. EMS is feature-rich,flexible and easy to use! 
            </Typography>
        </Paper>
    )
}


export default Home;