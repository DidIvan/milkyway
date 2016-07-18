var React = require("react");
var Header = require("./header/header.js");
var Footer = require("./footer/footer.js");


var Container = React.createClass({
    render() {
        return (
            <div>
                <Footer/>
            </div>
        );
    }
});

React.render(<Container/>, document.getElementById('container-id'));