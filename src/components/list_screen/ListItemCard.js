import React, { Component } from 'react'
import MoveUp from './MoveUp.png'
import MoveDown from './MoveDown.png'
import Close from './Close.png';

export class ListItemCard extends Component {

    getCompleted() {
        if (this.props.listItem.completed) {
            return true;
         } 
        else return false;
        }

    isFirst() {
        if (this.props.listItem.key === 0) {
            return true;
        }
        else {
            return false;
        }
    }

    isLast() {
        if (this.props.listItem.key == this.props.todoList.items.length - 1) {
            return true;
        }
        else {
            return false;
        }
    }
    
    render() {
        return (
            <div className='list_item_card' onClick = {this.props.processEditItem}>
                <div className='list_item_card_description'>
                    {this.props.listItem.description}
                </div>
                <div className='list_item_card_assigned_to'>
                    Assigned To: <strong>  {this.props.listItem.assigned_to} </strong>
                </div>
                <div className='list_item_card_due_date'>
                    {this.props.listItem.due_date}
                </div>
                { (this.getCompleted() === true) &&  <div className='list_item_card_completed'>
                        Completed
                </div>
                }
                { (this.getCompleted() === false) &&  <div className='list_item_card_not_completed'>
                        Pending
                </div>
                }
                <div id='delete' onClick = {this.props.deleteItem}> 
                    <img src = {Close}/>
                </div>
                { (this.isLast() === true) && <div className="disable" onClick = {this.props.moveDown}>
                    <img src = {MoveDown}/>
                </div>
                }
                { (!this.isLast() === true) && <div id='down' onClick = {this.props.moveDown}>
                    <img src = {MoveDown}/>
                </div>
                }                
                { (this.isFirst() === true) && <div className="disable" onClick = {this.props.moveUp}>
                    <img src = {MoveUp}/>
                </div>
                }
                { (!this.isFirst() === true) && <div id='up' onClick = {this.props.moveUp}>
                    <img src = {MoveUp}/>
                </div>
                }                
            </div>
        )
    }
}

export default ListItemCard