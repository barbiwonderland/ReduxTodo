import React, { useState } from "react";
import "rsuite/dist/styles/rsuite-dark.css";
import { useDispatch } from "react-redux";
import Todos from "./features/todos/todos";
// import Posts from './features/posts/Posts'
// import Users from './features/users/Users'
import { add } from "./features/todos/todoSlice";
import { Footer } from "rsuite";

function App() {
  const [todoTxt, setTodoTxt] = useState("");
  const dispatch = useDispatch();
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="row text-light">
            <div className="col-md-12 text-center mt-4">
              <p className="navbar-brand">Redux React TODO</p>
            </div>
          </div>
          <div className="col-md-12 text-center ">
            <p className="text-light">What you want to do?</p>
            <div className="col-md-4 justify-content-center d-flex mx-auto">
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  name="task"
                  value={todoTxt}
                  onChange={(e) => {
                    setTodoTxt(e.target.value);
                  }}
                />
              </div>
            </div>

            <button
              className="btn btn-success my-3 "
              onClick={() => {
                dispatch(add(todoTxt));
                setTodoTxt("");
              }}
            >
              Add
            </button>
          </div>
          <div className="row">
            <div className="col"></div>
            <div className="col-md-4 justify-content-center mx-auto text-light d-flex ">
              <div
                className="
            text-left "
              >
                {" "}
                <Todos />
              </div>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
export default App;
