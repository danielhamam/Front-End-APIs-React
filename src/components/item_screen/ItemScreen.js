import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class ItemScreen extends Component {
    render() {
        return (      
            <div id="todo_item" >
                <h3 id="item_heading">Item</h3>
                <div id="item_form_container">

                <div id="item_description_prompt" class="item_prompt">Description:</div>
                <input id="item_description_textfield" class="item_input" type="input" />
                
                <div id="item_assigned_to_prompt" class="item_prompt">Assigned To:</div>
                <input id="item_assigned_to_textfield" class="item_input" type="input" />

                <div id= "item_due_date_prompt" class="item_prompt">Due Date:</div>
                <input id="item_due_date_picker" class="item_input" type="date" />

                <div id="item_completed_prompt" class="item_prompt">Completed:</div>
                <input id="item_completed_checkbox" class="item_input" type="checkbox" />
            </div>
            <br />
            <button id="item_form_submit_button" class="item_button">Submit</button>
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
