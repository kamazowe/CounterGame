import {createStore,combineReducers} from 'redux';
import counterRedReducer from '../reducers/counterRedReducer';
import counterYellowReducer from '../reducers/counterYellowReducer';
export default ()=>{
    const store = createStore(
    combineReducers({
        counterYellow: counterYellowReducer,
        counterRed:counterRedReducer
      
    }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()    
);
return store;
};

 
