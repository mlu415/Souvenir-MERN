import React, {useState, useEffect} from "react";
import {Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import {BrowserRouter, Switch, Route} from 'react-router-dom'

//getting an action
import {getPosts} from "./actions/posts"

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from "./styles"

import Navbar from './components/Navbar/Navbar'


const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    //dispatches changes as soon as currentId is changed
    useEffect(()=> {
        dispatch(getPosts());
    },[currentId,dispatch]);

    return(

        <Container maxwidth = "lg">
            <Navbar />
            <Grow in>
                <Container>
                    <Grid className = {classes.mainContainer} container  justifyContent = "space-between" alignItems = "stretch" spacing = {3}>
                        <Grid item xs={12} sm = {7}>
                            <Posts setCurrentId = {setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm = {4}>
                            <Form currentId = {currentId}  setCurrentId = {setCurrentId} />
                        </Grid>
                    </Grid>

                </Container>

            </Grow>

        </Container>
        
    );
}

export default App;