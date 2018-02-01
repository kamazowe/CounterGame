import Immutable from 'immutable';
import defaultCounterYellow from '../store/defaultCounterYellow';


const initialState = Immutable.fromJS(defaultCounterYellow);

export default (state = initialState , action)=>{
    console.log(`reducer Yellow`);
           
    switch(action.type){
       case `CLICK_Y`:
       const {id} = action.payload;
       state = state.setIn(['byId',id,'count'], state.getIn(['byId',id,'count']) + state.getIn(['byId',id,'rise']) );
       //next Step : for of / it i dodawanie wlasciwosci total do sum
       let sum = state.get('totalYellow') + 2;
       state = state.set('totalYellow', sum);
            return state;   
        default:
            return state;
}
};
/**
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