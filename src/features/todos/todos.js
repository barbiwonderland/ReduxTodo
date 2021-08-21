import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTodos, del } from "./todoSlice";
import { BiCheckDouble } from "react-icons/bi";
import {RiSubtractLine} from "react-icons/ri"
function Todos() {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  console.log(todos);
  return (
    todos &&
    todos.map((x, index) => (
      <>
       
          <div bordered key={index} className=" text-capitalize text-light m-2 p-2 border bg-muted rounded">
            < RiSubtractLine className=" text-white me-2"></RiSubtractLine>
            
            {x}
            <a
              onClick={() => dispatch(del( index ))}
              className="text-success mx-2 "
            >
              <BiCheckDouble size={"1.5rem"} />
            </a>
          </div>
      
      </>
    ))
  );
}

export default Todos;
