
class App extends Component{
    
    constructor(props){
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.state={count:0};
    }
    handleClick(){
      console.log(`klikHC`);
      this.setState(()=>({count:1}));
      cossole.log('after click' +this.state.count);
    }
    render(){
      return(<div className={'app'} onClick={this.handleClick}>
      <MyComponent count={this.state.count}/>
        </div>);
    }
  }


  export default App;