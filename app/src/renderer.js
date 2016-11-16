import React from "react";
import ReactDOM from "react-dom";
import AppBar from "material-ui/AppBar";
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const GITHUB_REPO = "https://github.com/GetRektByMe/LapzClient";

// Call this or we can't use onTouchTap()
injectTapEventPlugin();

let Application = () => (
   <MuiThemeProvider>
    <div className="app">
        <AppBar
        title={document.title}
        zDepth={ 1 }
        className={"navBar"}
        showMenuIconButton={ false }
        iconElementRight={ <FlatButton label="GitHub" href={ GITHUB_REPO } target="_blank"/> }
        />
    </div>
   </MuiThemeProvider>
);

ReactDOM.render(<Application/>, document.getElementById("app"));
