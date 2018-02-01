import Immutable from 'immutable';
import defaultCounterRed from '../store/defaultCounterRed';

const initialState = Immutable.fromJS(defaultCounterRed);

export default (state = initialState , action)=>{
    console.log(`reducer Red`);
           
    switch(action.type){
       case `Click`:
       const {id} = action.payload;
       state = state.setIn(['byId',id,'count'], state.getIn(['byId',id,'count']) + state.getIn(['byId',id,'rise']) );
       //next Step : for of / it i dodawanie wlasciwosci total do sum
       let sum = state.get('totalRed') + 3;
       state = state.set('totalRed', sum);
            return state;   
        default:
            return state;
}
};

/*
    export default    {
        total:0,
        multiplier:1,
        byId:{'Counter1':{
                id:'Counter Yellow 1',
                name:'Counter1',
                count:0},
            'Counter2':{
                id:'Counter2',
                name:'Counter Yellow 2',
                count:1},
            'Counter3':{id:'Counter3',
                name:'Counter Yellow 3',
                count:2}
         },
         allIds:['Counter1','Counter2','Counter3']
        
       };
 */