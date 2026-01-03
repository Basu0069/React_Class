import {Create Slice} from '@reduxjs/toolkit'

Const CounterSlice = CreateSlice({
    name: 'counter',
    initialState:{value: 0}, 
    reducer:{
        increment(state){
            state.value += 1;
        }
        decodeURIComponent(state){
            state.value -= 1;
        }

    export const {increment, decrement} = CounterSlice.actions;
    export default CounterSlice.reducer;
    
  
    }
})