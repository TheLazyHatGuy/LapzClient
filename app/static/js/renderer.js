import React from "react";
import ReactDOM from "react-dom";
import AppBar from "material-ui/AppBar";
import navBar from "../../static/js/components";
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Call this or we can't use onTouchTap()
injectTapEventPlugin();

let Application = () => (
   <MuiThemeProvider>
    <navBar title={document.title} zDepth={3} />
   </MuiThemeProvider>
);

ReactDOM.render(<MuiThemeProvider><AppBar title={document.title} zDepth={3} /></MuiThemeProvider>, document.getElementById('app'));
