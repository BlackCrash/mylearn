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

var ListaComida = React.createClass({
    getInitialState: function() {
        return {
            comidas: [
                'Tacos',
                'Paella',
                'Ceviche'
            ]
        };
    },
    eachItem: function(comida, i) {
        return (
                <Comida key={i}
                    index={i}
                    nombre={comida}>
                    {i+1}
                </Comida>
            );
    },
    render: function() {
        return(<div className="centerBlock">
                <header>
                    <h1>Mis comidas favoritas</h1>
                    <i>Total: {this.state.comidas.length}</i>
                </header>
                
                <div>
                    {this.state.comidas.map(this.eachItem)}
                </div>
            </div>)
    }
});


ReactDOM.render(<ListaComida/>, document.getElementById('container'));