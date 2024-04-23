import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../state/store"
import { decrement, increment 
 ,incrementAsync} from "../state/counter/counterSlice"


const Counter = () => {
 const dispatch = useDispatch<AppDispatch>()
 const count = useSelector((state:RootState) => state.counter.value)
  return (
    <div>
     <h2>{count}</h2>
     <div>
      <button onClick={() =>dispatch(increment())}>+</button>
      <button onClick={() =>dispatch(decrement())}>-</button>
      <button onClick={() =>dispatch(incrementAsync(10))}>incrementByAmount</button>
     </div>
    </div>
  )
}

export default Counter