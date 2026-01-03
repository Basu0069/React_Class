import {configure Store} from '@reduxjs/toolkit'
import CounterReducer from './features/CounterSlice'

Const Store = configureStore({
    reducer: {
        counter:CounterReducer,
    
    }
});

export default Store;
