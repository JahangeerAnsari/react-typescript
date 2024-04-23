import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface CounterState{
 value: number
}
const initialState:CounterState = {
 value:0
}
const counterSlice = createSlice({
 name: 'counter',
 initialState,
 reducers:{
  increment:(state) =>{
  state.value += 1;
  },
  decrement:(state) =>{  
   state.value -= 1;
  },
  incrementByAmount:(state,action:PayloadAction<number>) =>{
   state.value += action.payload
  }
 },
 // to work with async request we are extraReducers
extraReducers:(builder) =>{

 builder.addCase(incrementAsync.pending,() =>{
  console.log("incrementAsync.pending");
  
 })
 builder.addCase(incrementAsync.fulfilled,(state,action:PayloadAction<number>) =>{
  state.value += action.payload;
 });
}
})
//  to perform async operation we can use
export const incrementAsync = createAsyncThunk(
 "counter/incrementAsync",
 async (amount:number) =>{
  await new Promise((resolve) => setTimeout(resolve,1000))
return amount;
 }
)
export const {increment,decrement,incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer;