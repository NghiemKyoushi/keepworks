import React from "react"

import Todo from '../Todo/Todo';
import TodoForm from '../TodoForm/TodoForm'
import '../TodoForm/addWork.style.css'
class TodoList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            note:[]
        };
        this.handleAdd = this.handleAdd.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
      }

      updateTodo(id, value){
          console.log("value", value);
          const {note} = this.state;
          const change = note.map((note) => {
              if(note.id === id){
                  note.content = value; 
              }
              return note;

          })
          console.log("change", change);
          this.setState({
              note: change
          })
      }

      handleAdd(content) {
        const {note} = this.state;
        const task = {
          content: content.content,
          id: note.length,
        };

        note.push(task);
        console.log("add", note);

        this.setState({
          note: note,
        });
      }
     
      removeTodo(id){
        // console.log("delete", id)
        const note = this.state.note;
        let filter = note.filter(function(element) {
          return element.id !== id;
        });
        // console.log("filter", filter)
        this.setState({
          note: filter
        })
      }
    render(){
        return (
            <div className= "container">
            <h1>List todo </h1>
            <TodoForm onSubmit ={this.handleAdd}/>
            <br/>
            <Todo
            note={this.state.note} 
            updateTodo={this.updateTodo}
            // completeTodo={completeTodo} 
            removeTodo={this.removeTodo} 
            />
        </div>
        )
    }
}

export default TodoList;