//This file adds in the navigation bar as a seperate component for the website
//contains the login, title and logo
import React from "react";
import {Link} from 'react-router-dom'
import { AppBar, Typography } from "@material-ui/core";
import useStyles from './styles'
import memories from "../../images/memories.png"


const Navbar = () => {
    const classes = useStyles();
    return (
        <AppBar className = {classes.appBar} position = "static" color="inherit">
        <div>
        <Typography component = {Link} to = '/' className = {classes.heading} variant = "h2" align = "center">Memory Store</Typography>
        </div>
        <img className = {classes.image} src = {memories} alt = "memories" height="60"/>
    </AppBar>
    )
}

export default Navbar;