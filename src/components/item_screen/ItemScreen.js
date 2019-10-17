import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class ItemScreen extends Component {

    getItemDescription = () => {

        let itemdescription_value = document.getElementById("item_description_textfield").value;
        return itemdescription_value;
    }

    getItemAssignedTo = () => {
        
        let itemassignedto_value = document.getElementById("item_assigned_to_textfield").value;
        return itemassignedto_value;
    }

    getItemDueDate = () => {

        let itemduedate_value = document.getElementById("item_due_date_picker").value;
        return itemduedate_value;
    }

    getItemCompleted = () => {

        let itemcompleted_value = document.getElementById('item_completed_checkbox');

        if (itemcompleted_value.checked === true) {
            return true;
        }
        else {
            return false;
        }
    }

    render() {
        return (      
            <div id="todo_item" >
                <h3 id="item_heading">Item</h3>
                <div id="item_form_container">

                <div id="item_description_prompt" class="item_prompt">Description:</div>
                <input id= "item_description_textfield" defaultValue = {this.getItemDescription()} class="item_input" type="input" />
                {/* // defaultValue = {this.props.currentScreen == "ITEM_SCREEN" ? "" : this.props.itemBeingEdited.description} /> */}
                
                <div id="item_assigned_to_prompt" class="item_prompt">Assigned To:</div>
                <input id="item_assigned_to_textfield" defaultValue = {this.getItemAssignedTo()} class="item_input" type="input" />
                 {/* // defaultValue = {this.props.currentScreen == "ITEM_SCREEN" ? "" : this.props.itemBeingEdited.description} /> */}

                <div id= "item_due_date_prompt"  class="item_prompt">Due Date:</div>
                <input id="item_due_date_picker" defaultValue = {this.getItemDueDate()} class="item_input" type="date" />
                 {/* // defaultValue = {this.props.currentScreen == "ITEM_SCREEN" ? "" : this.props.itemBeingEdited.description} /> */}

                <div id="item_completed_prompt" class="item_prompt">Completed:</div>
                <input id="item_completed_checkbox" class="item_input" type="checkbox" defaultChecked= {this.getItemCompleted()}/>
                {/* // defaultValue = {this.props.currentScreen == "ITEM_SCREEN" ? "" : this.props.itemBeingEdited.description} /> */}
            </div>
            <br />
            <button id="item_form_submit_button" class="item_button" onClick= {this.props.processSubmitChanges} >Submit</button>
            <button id="item_form_cancel_button" class="item_button" onClick={this.props.goListScreen}>Cancel</button>
    </div>
        )
    }
}

ItemScreen.propTypes = {
    currentScreen: PropTypes.string.isRequired,
    todoItem: PropTypes.object.isRequired
}

export default ItemScreen
