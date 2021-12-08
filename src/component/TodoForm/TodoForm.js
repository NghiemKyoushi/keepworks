import React, { Component } from "react";
import "./addWork.style.css";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: this.props.edit ? this.props.edit.value : "",
      note: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.onSubmit({
      content: this.state.input,
    });
    this.setState({
      input: "",
    });
  }

  handleChange(e) {
    this.setState({
      input: e.target.value,
    });
  }

  componentDidMount() {}
  render() {
    return (
      <div className="">
        <form className="todo-form" onSubmit={this.handleSubmit}>
          {this.props.edit ? (
            <>
              <input
                required
                type="text"
                placeholder="Add todo"
                name="content"
                onChange={this.handleChange}
                className="todo-input"
                value={this.state.input}
              />
              <button className="todo-button" onClick={this.handleAdd}>
                Update
              </button>
            </>
          ) : (
            <>
              <input
                required
                type="text"
                placeholder="Add todo"
                name="content"
                onChange={this.handleChange}
                className="todo-input"
                value={this.state.input}
              />
              <button className="todo-button" onClick={this.handleAdd}>
                Add work
              </button>
            </>
          )}
        </form>
      </div>
    );
  }
}
export default TodoForm;
