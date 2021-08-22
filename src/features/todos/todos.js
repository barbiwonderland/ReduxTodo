import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTodos, del } from "./todoSlice";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
function Todos() {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  console.log(todos);
  return (
    todos &&
    todos.map((x, index) => (
      <>
       
          <div bordered key={index} className=" text-capitalize text-light m-2 p-2 border  rounded">
            {/* < RiSubtractLine className=" text-white me-2"></RiSubtractLine> */}
            
           {x}
            <a
              onClick={() => dispatch(del( index ))}
              className="text-success float-end ms-5  "
            >
              <IoMdCheckmarkCircleOutline size={"1.5rem"} />
            </a>
          </div>
      
      </>
    ))
  );
}

export default Todos;
