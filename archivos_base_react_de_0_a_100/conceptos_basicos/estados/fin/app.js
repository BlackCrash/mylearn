var Comida = React.createClass({
    getInitialState: function(){
        return { like: true }
        //return { like: Boolean(this.props.like) }
    },
    handleLike: function(){
        this.setState({like: !this.state.like})
    },
    render: function() {
        return (
            <div>
                <h1 className="bg-success">{this.props.nombre}</h1>
                <p className="bg-info">
                    Comida <i>{this.props.children}</i>
                </p>
                <p>
                    <input type="checkbox" className="glyphicon glyphicon-heart glyphicon-heart-lg" 
                    onChange={this.handleLike} 
                    defaultChecked={this.state.like}/>
                    <br />
                    Like: {String(this.state.like)}
                </p>
            </div>
            );
    }
});

ReactDOM.render(<div className="centerBlock">
        <Comida nombre="Tacos" like>
            Mexicana
        </Comida>
        <Comida nombre="Paella">
            Española
        </Comida>
        <Comida nombre="Ceviche" like>
            Peruana
        </Comida>
    </div>
    , document.getElementById('container')
);