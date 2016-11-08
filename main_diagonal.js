class ReactSlider extends React.Component {
    constructor(){
        super()
    }
    componentDidMount() {
        document.getElementById(this.props.data.id).value = this.props.data.initVal
    }
    render() {
        var slider = React.createElement('input',
                                         {id: this.props.data.id,
                                         type: 'range',
                                         min: this.props.data.min,
                                         max: this.props.data.max,
                                         step: this.props.data.step,
                                         style: {width: this.props.data.sliderWidth,
                                                 left: this.props.data.sliderLeft, 
                                                 top: this.props.data.sliderTop, 
                                                 position: 'absolute'},
                                         onChange : (event) => this.props.sliderChanged(event)})
        
        return( React.createElement('div', null, slider) )
    }
}

const reactSlider = React.createFactory(ReactSlider)
const div = React.createFactory('div')

class Container extends React.Component {
    constructor() {
        super()
        this.state = {
            n: 5,
            data: []
        }
    }
    //diagonal version
    loop(scope){
        var tempData = []
        for(var i = 0; i < scope.n; i++) {
            tempData.push({'id': i.toString(),
                'min': 5,
                'max': 100,
                'step': 1,
                'sliderWidth': '360px',
                'sliderLeft': (window.innerWidth/scope.n*i).toString() + "px",
                'sliderTop': (window.innerHeight/scope.n*i).toString() + "px",
                'color': '#00FF00',
                'initVal': scope.n,
            })
        }
        return(tempData)
    }
    componentDidMount(){
        this.setState({data: this.loop(this.state)})   
    }
    sliderChanged(event) {
        this.setState({n: event.target.value, data: this.loop(this.state)})
        
    }
    render() {
        return div(null, this.state.data.map( 
            (data) => reactSlider({ data, sliderChanged: this.sliderChanged.bind(this)})))
    }
}
    
ReactDOM.render(
    React.createElement(Container),
    document.getElementById('content')
);