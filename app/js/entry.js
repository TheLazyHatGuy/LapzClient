import "../scss/main.scss";

const React = require("react");
const ReactDom = require("react-dom");

var test = React.createClass({
    render: function() {
        return <h1>Heya</h1>;
    }
});

ReactDom.render(<App/>, document.getElementById("root"));
