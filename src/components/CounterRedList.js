import React from 'react'
import { connect } from 'react-redux'
import CounterItem from './CounterItem'
import {selectorCounterRed} from '../selectors/counters'
import {parsePath} from 'history';

const CounterRedList = (props)=>{
    return (<div>
        <h3>List of Red counters</h3>
        {props.visibleList.map((counter)=>{
            // once item counter (Map)
 
           return (<CounterItem key={counter.id}  {...counter}/>)})
        }
        <div>
        <p>Sumary :{props.counters.get('totalRed')}</p>
        <p>X-rate :{props.counters.get('multiplierRed')}</p>
        </div>
        
        </div>);
};


const mapStateToProps = (state, ownProps) => ({
    //next step list which return array show item
    
    counters:state.counterRed,
    // zwraca tylko tablice z id ['counter1','counter3']
    visibleList:selectorCounterRed(state.counterRed)
    
});



export default connect(mapStateToProps,undefined)(CounterRedList)






