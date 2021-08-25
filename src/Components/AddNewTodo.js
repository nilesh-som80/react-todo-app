
import React, { useState } from 'react';

export default function AddNewTodo({addTodo}) {
    const [title,setTitle] = useState("")
    const[desc,setDesc] = useState("")
    const submit = (e)=>{
        e.preventDefault()
        if (!title&&!desc){
            alert('title and description cant be blank');
        }else{
            addTodo(title,desc)
        }

        
    }
    return (
        <div>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Title</label>
                    <input type="text" className="form-control" value={title} onChange = {(e)=>{setTitle(e.target.value)}} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="title" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Description</label>
                    <input type="text" className="form-control" value={desc} onChange={(e)=>{setDesc(e.target.value)}} id="exampleInputPassword1" placeholder="Description" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
