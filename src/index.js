import { createStore } from 'redux';
import counterReducer from './reducers/counterReducer';
console.log("WHatever")
const store = createStore(counterReducer);


console.log( store.getState() );
store.dispatch({type: 'INCREMENT_COUNT'})
store.dispatch({type: 'INCREMENT_COUNT'})
console.log( store.getState() );
store.dispatch({type: 'DECREMENT_COUNT'})
console.log( store.getState() );
store.dispatch({type: 'INCREMENT_COUNT'})
store.dispatch({type: 'INCREMENT_COUNT'})
console.log( store.getState() );
store.dispatch({type: 'RESET_COUNT'});
console.log( store.getState() );
