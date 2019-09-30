import React, { Component } from 'react'

export class ListHeading extends Component {
    render() {
        return (
            <div id="list_heading"
                onClick={this.props.goHome}
            >   @todo
            </div>
        )
    }
}

export default ListHeading
