import React from "react";

import Todo from "../Todo/Todo";
import TodoForm from "../TodoForm/TodoForm";
import "../TodoForm/addWork.style.css";
class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: [],
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.completeTodo = this.completeTodo.bind(this);
  }
  completeTodo(id){
    console.log("comlete", id);
    const finish = this.state.note.map((note) => {
      if (note.id === id) {
        note.isComplete = true
      }
      return note;
    });
    this.setState({
      note: finish
    })
  }
  updateTodo(id, value) {
    const change = this.state.note.map((note) => {
      if (note.id === id) {
        note.content = value;
      }
      return note;
    });
    this.setState({
      note: change,
    });
  }
  handleAdd(content) {
    const { note } = this.state;
    const task = {
      content: content.content,
      id: note.length,
      isComplete: false
    };
    note.push(task);
    this.setState({
      note: note,
    });
  }
  removeTodo(id) {
    const note = this.state.note;
    let filter = note.filter(function (element) {
      return element.id !== id;
    });
    this.setState({
      note: filter,
    });
  }
  render() {
    return (
      <div className="container">
        <h1>List todo </h1>
        <TodoForm onSubmit={this.handleAdd} />
        <br />
        <Todo
          note={this.state.note}
          updateTodo={this.updateTodo}
          completeTodo={this.completeTodo}
          removeTodo={this.removeTodo}
        />
      </div>
    );
  }
}

export default TodoList;
