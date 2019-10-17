import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { throwStatement } from '@babel/types';

export class ItemDelete extends Component {

    render() {
        if (!this.props.visibility) {
            return null;
        }
        return (
            <div id="modal_yes_no_dialog">
                <p>   Delete list? </p>
                <br />
                <br />
                <br />
                <p> <strong> Are you sure you want to delete this list? </strong> </p>
                <br />
                <button id='yes' onClick = {this.props.deleteList} >Yes </button>
                <button id='no' onClick = {this.props.visibilityFalse}>No</button>
                <p>  The list will not be retrievable.</p> 
            </div>
        ) 
    }
}

export default ItemDelete