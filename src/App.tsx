import Counter from "./components/Counter";

/*
redux is a state management library that allows have a global state
// three main components of redux store 
store -- store is global state that can be accessed by any components no matter where they are present.
store having slices a store having different slices as example counter store have counter slice
// that hold piece of state related to the counter
multiple slices combined create a store and we can access the state from the store

*/
interface CounterState {
  value: number;
}
interface UserState {
  isSignedIn: boolean;
}
/*Actions- actions tells to the redux what should be done with the state
*/
const increment ={type:'increment'};
const decrement ={type:'decrement'};
const incrementByAmount ={type:'incrementByAmount', payload:10};

// reducer reducer is responsible for taking the actions and
// and based on the actions it will update the redux
// reducer not directly update the state but it will take a copy
// of the state and it will update the state

const App = () =>{
  return (
    <div>
      <Counter/>
    </div>
  )
}
export default App;