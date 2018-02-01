import React from 'react'
import { connect } from 'react-redux'
import CounterItem from './CounterItem'
import {selectorCounterRed} from '../selectors/counters'

const CounterRedList = (props)=>{
    return (<div>
        <h3>List of Red counters</h3>
        {props.visibleList.map((counter)=>{
            // once item counter (Map)
 
           return (<CounterItem key={counter.id}  {...counter}/>)})
        }
        
        </div>);
};


const mapStateToProps = (state, ownProps) => ({
    //next step list which return array show item
    
    counters:state.counterRed,
    // zwraca tylko tablice z id ['counter1','counter3']
    visibleList:selectorCounterRed(state.counterRed)
    
});



export default connect(mapStateToProps,undefined)(CounterRedList)






