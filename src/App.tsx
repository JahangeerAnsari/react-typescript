import { useEffect } from "react";
import { useCounterStore } from "./store";
// we can access outside  the component and access the function
const logout = () =>{
  // const count  = useCounterStore.getState().count;
  // console.log("count", count);
  // set the state 
  useCounterStore.setState({count:1})
  
}

const App = () => {
  // const [count] = useState(0)
  const count = useCounterStore((state) => state.count);

  return <OtherComponent count={count} />;
};

const OtherComponent = ({ count }: { count: number }) => {
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const incrementAsync = useCounterStore((state) => state.incrementAsync);
  useEffect(() =>{
    logout()
  },[])
  return <div>{count}
  <button onClick={increment}>Increment</button>
  <button onClick={decrement}>Decrement</button>
  <button onClick={incrementAsync}>IncrementAsync</button>
  </div>;
};
export default App;
