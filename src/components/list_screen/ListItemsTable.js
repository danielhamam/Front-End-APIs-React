import React, { Component } from 'react'
import ListItemCard from './ListItemCard'
import PropTypes from 'prop-types'
import AddItem from './AddItem.png';

export class ListItemsTable extends Component {
    render() {
        return (
            <div id="list_items_container" className = "list_item_header_card">
                <div id="todo_item" > 
                <div className="list_item_header_card"> </div>
                <div className="list_item_task_header">Task</div>
                <div className="list_item_due_date_header">Due Date</div>
                <div className="list_item_status_header">Status</div>
                {
                    this.props.todoList.items.map((todoItem)=>(
                        <ListItemCard 
                            todoList = {this.props.todoList}
                            key={todoItem.key}
                            listItem={todoItem}
                            moveUp = {this.props.moveUp.bind(this, todoItem.key)}
                            moveDown = {this.props.moveDown.bind(this, todoItem.key)}
                            deleteItem = {this.props.deleteItem.bind(this, todoItem.key)}
                            />
                    ))
                }
                
                <div className="list_item_add_card" onClick={this.props.goItemScreen}>
                <img src = {AddItem}/>
                </div>
                </div>
            </div>
        )
    }
}

export default ListItemsTable
