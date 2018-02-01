import React from 'react'
import { connect } from 'react-redux'
import CounterItem from './CounterItem'
import {selectorCounterYellow} from '../selectors/counters'

const CounterYellowList = (props)=>{
    return (<div>
        <h3>List of Yellow counters</h3>
        {props.visibleList.map((counter)=>{
            // once item counter (Map)
           return (<CounterItem key={counter.id}  {...counter}/>)})
        }
        <div>
        <p>Sumary :{props.counters.get('totalYellow')}</p>
        <p>X-rate :{props.counters.get('multiplierYellow')}</p>
        </div>
        
        </div>);
};

const mapStateToProps = (state, ownProps) => ({
    //next step list which return array show item
    
    counters:state.counterYellow,
    
    visibleList:selectorCounterYellow(state.counterYellow)
    
});

export default connect(mapStateToProps,undefined)(CounterYellowList)






