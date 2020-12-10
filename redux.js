const redux = require ('redux');
const createStore = redux.createStore;
const initialState ={
    value:0,
    age : 23,
}

// Reducer
const rootReducer = (state = initialState, action)=>{
    switch (action.type) {
        case 'ADD_AGE':
            return{
                ...state,
                age : state.age + 1,
            }
        case 'CHANGE_VALUE':
            return{
                ...state,
                value: state.value+action.newValue
            }
            default:
                return state;
                break;
    }
}
// Store
const store = createStore(rootReducer);
console.log(store.getState());
// Subcription
store.subscribe(()=>{
    console.log('newStore :',store.getState());
})
// Dispathing Action
store.dispatch({type: 'ADD_AGE'})
store.dispatch({type: 'CHANGE_VALUE', newValue:12})
console.log(store.getState());