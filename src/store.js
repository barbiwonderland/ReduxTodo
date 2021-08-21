import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todos/todoSlice";
export default configureStore({
  reducer: {
    todos: todoReducer,

  },
  devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  
});
