var Comida = React.createClass({
    getInitialState: function(){
        return { 
            like: Boolean(this.props.like)
        }
    },
    handleLike: function(){
        this.setState({like: !this.state.like})
    },
    render: function() {
        return (
            <div className="comida">
                <h1 className="bg-success">{this.props.nombre}</h1>
                <p className="bg-info">
                    Posición: <i>{this.props.children}</i>
                </p>
                <div>
                    <input type="checkbox" className="glyphicon glyphicon-heart heart" 
                    onChange={this.handleLike} 
                    defaultChecked={this.state.like}/>
                    <br />
                    Like: {String(this.state.like)}
                </div>
            </div>
            )
    }
});

ReactDOM.render(
    <div className="centerBlock">
        <Comida nombre="Tacos">
            1
        </Comida>
        <Comida nombre="Paella">
            2
        </Comida>
        <Comida nombre="Ceviche">
            3
        </Comida>
    </div>,
    document.getElementById('container')
);