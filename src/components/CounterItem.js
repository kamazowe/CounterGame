
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {receiveClick_R} from '../actions/counterRed'


export  class CounterItem extends Component{
    constructor(props){
      super(props);
      this.state={
        id: this.props.id || 0,
        name: this.props.name || '',
        rise:this.props.rise || 0,
        count:this.props.count || 0
      }
      this.handleClick = this.handleClick.bind(this);
      
    }
    handleClick(e){
      console.log(this.props.id)
      this.props.click(this.props.id)
    }
    componentWillMount(){
      console.log('componentWillMount');
      console.log('props');
      console.dir(this.props)
      
    }
    componentDidMount(){
      console.log('componentDidMount');
      
    }
    componentWillReceiveProps(nextProps,nextState){
      console.log(`componentWillReceiveProps`);
      console.log(`nextprops`)
      console.dir(nextProps);
      console.log(`props`)
      console.dir(this.props);
      console.log(`state`);
      console.dir(this.state);
      console.log("-".repeat(5))
      for(let prop in this.state){
        if(this.props[prop] != nextProps[prop] ){
          this.setState((prevState,props)=>({
            id: prevState.id,
            name: nextProps.name,
            rise: nextProps.rise,
            count: nextProps.count
          }))
        }
      }
        this.setState((prevState)=>({counter:prevState.count + 1}))
      console.log(`dotarles kurde`);
  
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
          <p>{this.state.count}</p>
          <button onClick={this.handleClick}>Click</button>
        </div>);
    }
  }

  const mapDispatchToProps =(dispatch)=> ({
    click:(id)=>dispatch(receiveClick_R(id))
  })

  export default connect(undefined,mapDispatchToProps)(CounterItem)
  

  

