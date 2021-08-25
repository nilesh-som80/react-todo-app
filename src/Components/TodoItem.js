import React from 'react'

export default function TodoItem({todo,onDelete}) {
    return (
            <div className="col-lg-12 col-md-6 col-sm-2 my-3">
                <h5>{todo.title}</h5>
                <p>
                    {todo.description}
                </p>
                <button className="btn btn-danger" onClick={()=> {onDelete(todo) }}>Delete</button>
                <hr />
            </div>
            
        )
}
