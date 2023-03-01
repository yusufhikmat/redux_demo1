const redux  =  require("redux")
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators
const combineReducers =  redux.combineReducers
const BUY_CAKE = "BUY_CAKE";
const RESTORE_CAKE = "RESTORE_CAKE";
const BUY_ICE = "BUY_ICE";
const RESTORE_ICE = "RESTORE_ICE";

const buyCake =() =>{
    return {
        type: BUY_CAKE

    }
}

const restoreCake = (qty = 1) =>{
    return{
        type:RESTORE_CAKE,
        payload:qty
    }
}

const buyIce =() =>{
    return {
        type: BUY_ICE

    }
}

const restoreIce = (qty = 1) =>{
    return{
        type:RESTORE_ICE,
        payload:qty
    }
}


const initialCakeState ={
    nameOfCakes : 10,
   
}

const initialIceState ={
   
    numOfIce  :30
}
const cakeReducer = (state = initialCakeState, action) =>{
    switch(action.type){
        case BUY_CAKE: return{
            ...state, 
            nameOfCakes:state.nameOfCakes - 1
        }
        case RESTORE_CAKE : return{
            ...state,
            nameOfCakes : state.nameOfCakes + action.payload
        }
        
        default: return state
    }
}


const iceReducer = (state = initialIceState, action) =>{
    switch(action.type){
        case BUY_ICE:return{
            ...state,
            numOfIce:state.numOfIce -1
        }
        case RESTORE_ICE:return{
            ...state,
            numOfIce: state.numOfIce + action.payload
        }
        default: return state
    }
}

const rootReducer = combineReducers({
    cakeReducer,
    iceReducer
})
const store = createStore(rootReducer)
console.log("initial state", store.getState())

const unsubscribe = store.subscribe(()=>console.log("update state", store.getState()))
const action = bindActionCreators({buyCake, restoreCake, buyIce, restoreIce}, store.dispatch)
action.buyCake()
action.buyCake()
action.buyCake()
action.buyCake()
action.restoreIce(5)
unsubscribe()