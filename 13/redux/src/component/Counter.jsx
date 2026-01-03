import { useSelector,useDispatch } from "react-redux";
import{increment,reset } from 'Counterslice'
import { use } from "react";

function Counter(){
    const value = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return(
        <div>
            <h1>{value}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    )
}