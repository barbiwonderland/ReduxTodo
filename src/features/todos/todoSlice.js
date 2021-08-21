import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [
  
  ],
  reducers: {
    add(state, { payload }) {
      state.push(payload);
    },
    del(state, { payload: index }) {
      state.splice(index, 1)
    },
  },
});
// todos viene del store
export const selectTodos = ({todos}) => todos;
export const { add,del } = todoSlice.actions;
export default todoSlice.reducer;
