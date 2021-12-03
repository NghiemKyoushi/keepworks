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
    const {id, content} = this.state;
    return (
        <div className="todo-row">
         <div>{content}</div>
         <div className="icon" onClick= {() => this.props.deleteTask(id)}>
           <DeleteIcon/>
         </div>
        </div>
      );
  }
}
export default Cards;