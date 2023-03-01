const redux =require("redux")
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const reduxLogger =require('redux-logger')
const logger = reduxLogger.createLogger()
const STREET_UPDATED = "STREET_UPDATED"

const streetUpdate = (street) =>{
    return{
        type:STREET_UPDATED,
        payload :street
    }
}

const initialState ={
    name:'Hikmah',
    age:12,
    address:{
        street:"32 Opeloyeru",
        city:"Lagos",
        country:"Nigeria"
    },
    class:"Nursery 1"
}

const reducer =(state= initialState, action) =>{
    switch(action.type){
        case STREET_UPDATED:return{
            ...state,
            address:{
                ...state.address,
                street:action.payload
            }
        }
        default:return state
    }
}

const store = createStore(reducer, applyMiddleware(logger))
console.log("initial state", store.getState())
const unsubscribe = store.subscribe(()=>{})

store.dispatch(streetUpdate("255,sanusi"))

unsubscribe()
