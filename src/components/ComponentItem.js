

class CounterItem extends Component{
    constructor(props){
      super(props);
      this.state={
        id:0,
        name:'',
        rise:0,
        total:0
      }
    }
    componentWillMount(){
      console.log('componentWillMount');
    }
    componentDidMount(){
      console.log('componentDidMount');
    }
    componentWillReceiveProps(nextProps){
      console.log(`componentWillReceiveProps`);
      console.dir(nextProps);
        this.setState((prevState)=>({counter:prevState.counter + 1}))
      console.log(`dotarles kurde`);
  //                          this.state.counter++
    }
    shouldComponentUpdate(nextProps,nextState){
      console.log('shouldComponentUpdate');
      console.log('oldState: ' + this.state.counter);
      console.log('newState: ' + nextState.counter)
      if(this.state.counter != nextState.counter){
        return true;
      }
    }
    componentWillUpdate(nextProps,nextState){
      console.log('componentWillUpdate');
      console.log(`zaraz wyrenderuje ${nextState.counter}`)
    }
    componentDidUpdate(){
      console.log('componentDidUpdate');
    }
    
    render(){
      console.log('render (w state obecnie jest total : '+this.state.total);
      return (<div><h3>MyComponent</h3>
          <h4>{this.state.name}</h4>
          <p>{this.state.id}</p>
          <p>{this.state.rise}</p>
          <p>{this.state.total}</p>
        </div>);
    }
  }