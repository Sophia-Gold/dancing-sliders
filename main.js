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
            n: 100,
            data: []
        }
    }
    loop(scope){
        var tempData = []
        for(var i = 0; i < scope.n; i++) {
            var offSet = Math.random() * 10
            var columns = Math.floor((window.innerWidth/(300 + offSet )))
            var rows = Math.floor((window.innerHeight/offSet))
            tempData.push({'id': i.toString(),
                'min': 10,
                'max': 1000,
                'step': 1,
                'color': '#00FF00',
                'initVal': scope.n,
                'sliderWidth': '300px',
                'offSet': offSet,
                'sliderLeft': ((i % columns) * (300 + offSet )).toString() + "px",
                'sliderTop': ((i % rows) * offSet).toString() + "px",
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