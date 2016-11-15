import React from "react";
import AppBar from "material-ui/AppBar";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

var navBar = () => (
    <AppBar title={ document.title }
            zDepth={ 3 } />
);

export default navBar;
