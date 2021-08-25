import TodoItem from "./TodoItem";
import React, { useState , useEffect } from "react";
import AddNewTodo from "./AddNewTodo";

export default function Todos() {
    let formStyle = {
        overflow:"initial"
    }
    let todoStyle = {
        height: "390px",
        overflow: "scroll",
        top:"5px",
        width:"95%",
        right:"-10px",
    }; 
    let initTodo;
    if (!localStorage.getItem('todos')) {
        initTodo = []        
    } else {
        initTodo = JSON.parse(localStorage.getItem('todos')) 
    }
  const [mytodos, settodos] = useState(initTodo);
  let onDelete = (todo) => {
    console.log("Todos has been deleted  ", todo);
    settodos(
      mytodos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem('todos', JSON.stringify(mytodos));

    console.log(mytodos);
  };
  console.log(mytodos);
  const addTodo = (title, desc) => {
    const mytodo = {
      title: title,
      description: desc,
    };
    settodos([...mytodos, mytodo]);
    console.log(mytodos);
  };
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(mytodos));
      
  }, [mytodos])

  return (
    <div className="container">
      <h3 className="text-center my-5">Todos List</h3>
      <div className="row" >
        <div className="col-lg-6 col-md-12 col-sm-12 " style={formStyle}>
            <h4>Add New Todo</h4>
          <AddNewTodo addTodo={addTodo} />
        </div>
        <hr />
        <div className="col-lg-6 col-md-12 col-sm-12 mt-3" style = {todoStyle} >
          {mytodos.length === 0
            ? "No Todos to display"
            : mytodos.map((todo) => {
                return (
                  <TodoItem
                    todo={todo}
                    key={mytodos.indexOf(todo)}
                    onDelete={onDelete}
                  />
                );
              })}
        </div>
      </div>
    </div>
  );
}
