import React, { Component } from 'react'

export class ListItemCard extends Component {
    render() {
        return (
            <div className='list_item_card'>
                <div className='list_item_card_description'>
                    {this.props.listItem.description}
                </div>
                <div className='list_item_card_assigned_to'>
                    Assigned To: <strong>{this.props.listItem.assignedTo}</strong>
                </div>
                <div className='list_item_card_due_date'>
                    {this.props.listItem.dueDate}
                </div>
                <div className='list_item_card_completed'>
                    {this.props.listItem.completed}
                </div>
            </div>
        )
    }
}

export default ListItemCard
