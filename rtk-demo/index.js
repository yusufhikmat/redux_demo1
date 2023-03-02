const store = require('./app/store')
const cakeActions=require('./features/cake/cakeSlice').cakeActions
const icecreamActions = require('./features/icecream/icecreamSlice').icecreamActions


console.log('initial state',store.getState())
const unsubscribe= store.subscribe(()=>{})

    store.dispatch(cakeActions.ordered())
    store.dispatch(cakeActions.ordered())
    store.dispatch(icecreamActions.ordered())
    store.dispatch(icecreamActions.restocked(3))
    unsubscribe()