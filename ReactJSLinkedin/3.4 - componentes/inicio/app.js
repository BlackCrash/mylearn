
/* Para crear componentes como clase de React a constante. */
/* const HelloMessage = React.createClass({
   render: function() {
       return <div>Hello {this.props.name}</div>;
  }
}); */

/* para crear componentes directamente. */
class HelloMessage extends React.Component {
   render() {
     return <h1>Hello, {this.props.name}</h1>;
   }
};

class App extends React.Component {
    render() {
        return <fieldset>
            <HelloMessage name="Eduardo" />
            <HelloMessage name="Johana" />
        </fieldset>
    }
};

ReactDOM.render(<div><App /></div>, 
    document.getElementById('mensaje'));