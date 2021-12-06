import React, { Component } from "react";
import "./addWork.style.css";
import Cards from "../card/Card";


class AddWork extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      note: [],
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }
  handleAdd(e) {
    e.preventDefault();
    const { content, note } = this.state;
    const task ={
      content: content,
      id: note.length,
    };
    note.push(task);
    this.setState({
      note: note,
    });
  }
  deleteTask(id){
    console.log("delete", id)
    const note = this.state.note;
    let filter = note.filter(function(element) {
      return element.id !== id;
    });
    console.log("filter", filter)
    this.setState({
      note: filter
    })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  render() {
    console.log("note", this.state.note.length);
    return (
      <div className="container">
      <h1>List todo</h1>
      <form className="todo-form">
      <input type="text" placeholder="Add todo" name ="content" onChange={this.handleChange} className="todo-input" />
      <button className="todo-button" onClick={this.handleAdd}> Add work</button>
      </form>
      
        <div className="cards">    
        {this.state.note.length > 0
                ? this.state.note.map((note) => (
                      <Cards
                        key = {note.id}
                        content={note.content}
                        id = {note.id}
                        deleteTask ={this.deleteTask}
                      />
                  ))
                : null}
        </div>
      </div>
    );
  }
}
export default AddWork;
