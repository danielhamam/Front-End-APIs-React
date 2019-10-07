import React, { Component } from 'react'

export class ListItemCard extends Component {

    getCompleted() {
        if (this.props.listItem.completed) {
            return true;
         } 
        else return false;
        }
    
    render() {
        return (
            <div className='list_item_card'>
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
            </div>
        )
    }
}

export default ListItemCard