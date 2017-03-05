var React = require("react");
var ReactDOM = require("react-dom");

var title = React.createClass({
	render: function() {
		return (
			<h1>{this.prop.name}</h1>
			<h3>{this.prop.description}</h3>
		);
	}
});

ReactDOM.render(
	<title name="Joe Fedden" description="Student" />, 
	document.getElementById('app')
);
