
/* Para crear componentes como clase de React a constante. */
/* const HelloMessage = React.createClass({
   render: function() {
       return <div>Hello {this.props.name}</div>;
  }
}); */

/* para crear componentes directamente. */
class HelloMessage extends React.Component {
   render() {
    return (
        <div>
            <h1>Hello, {this.props.name}</h1>
            <ul>
                <li>
                    {this.props.children}
                </li>
            </ul>
        </div>
    );
   }
};

class App extends React.Component {
    render() {
        return <fieldset>
            <HelloMessage name="Eduardo">
                Ese soy yo
            </HelloMessage>
            <HelloMessage name="Johana">
                Ella es mi esposa
            </HelloMessage>
        </fieldset>
    }
};

ReactDOM.render(<div><App /></div>, 
    document.getElementById('mensaje'));