import * as React from "react";
import "./Card.style.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import TodoForm from "../TodoForm/TodoForm";
export default class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: {},
    };
    this.edit = this.edit.bind(this);
    this.submitUpdate = this.submitUpdate.bind(this);
  }
  edit(id, value) {
    console.log("edit", id);

    this.setState({
      edit: {
        id: id,
        value: value,
        checkEdit: true,
      },
    });
  }
  submitUpdate(value) {
    this.props.updateTodo(this.state.edit.id, value.content);
    this.setState({
      edit: {
        // id: id,
        // value:value,
        checkEdit: false,
      },
    });
  }

  render() {
    // const {edit} = this.state;
    return (
      <>
        {this.state.edit.checkEdit
          ? this.props.note.map((note, index) => {
              if (note.id === this.state.edit.id) {
                return (
                  <TodoForm
                    onSubmit={this.submitUpdate}
                    key={index}
                    edit={this.state.edit}
                  />
                );
              } else {
                return (
                  <div className="todo-row" key={index}>
                    <div>{note.content}</div>
                    <div className="icon">
                      <DeleteIcon
                        className="delete-icon"
                        onClick={() => this.props.removeTodo(note.id)}
                      />
                      <EditIcon
                        className="edit-icon"
                        onClick={() => this.edit(note.id, note.content)}
                      />
                    </div>
                  </div>
                );
              }
            })
          : this.props.note.map((note, index) => (
              <div className="todo-row" key={index}>
                <div>{note.content}</div>
                <div className="icon">
                  <DeleteIcon
                    className="delete-icon"
                    onClick={() => this.props.removeTodo(note.id)}
                  />
                  <EditIcon
                    className="edit-icon"
                    onClick={() => this.edit(note.id, note.content)}
                  />
                </div>
              </div>
            ))}
        <>
          {/* {
        this.props.note.map((note, index) => (
          <div className="todo-row" key ={index}>
          <div>{note.content}</div>
          <div className="icon" >
            <DeleteIcon className= "delete-icon" onClick= {() => this.props.removeTodo(note.id)}/>
            <EditIcon className ="edit-icon" onClick={() => this.edit(note.id, note.content)}/>
          </div>
         </div>  
         ))
      } */}
        </>
      </>
    );
  }
}
