var Saludo = React.createClass({
    render: function() {
        return (
            <div>
                <h1>¡Hola Mundo!</h1>
                <h3>Planeta Tierra</h3>
                <p>
                    Buen día {this.props.nombre} <br/>
                    <i>{this.props.children}</i>
                </p>
            </div>
            );
    }
});

ReactDOM.render(
    <div>
        <Saludo nombre="Sergio Brito">
            Mexicano
        </Saludo>
        <Saludo nombre="Jorge Mochón">
            Español
        </Saludo>
        <Saludo nombre="Carlos Solís">
            Costarricense
        </Saludo>
    </div>
    , document.getElementById('mensaje')
);