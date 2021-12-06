import * as React from 'react';
import "./Card.style.css";
import DeleteIcon from '@mui/icons-material/Delete';
class Cards extends React.Component {
    constructor(props){
        super(props);
       
        this.state={
          id: this.props.id,
          content: this.props.content
        }
        
    }
   
  render(){
    return (
        <div className="todo-row">
         <div>{this.props.content}</div>
         <div className="icon" onClick= {() => this.props.deleteTask(this.props.id)}>
           <DeleteIcon/>
         </div>
        </div>
      );
  }
}
export default Cards;