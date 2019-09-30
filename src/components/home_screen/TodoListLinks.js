import React, { Component } from 'react';
import TodoListLink from './TodoListLink'
import PropTypes from 'prop-types';

class TodoListLinks extends Component {
    render() {
        return (
            <div id="home_your_lists_list">{
                this.props.todoLists.map((todoList)=>(
                    <TodoListLink  
                        key={todoList.key}
                        loadList={this.props.loadList} 
                        todoList={todoList} />
                ))}
            </div>
        );
    }
}

TodoListLinks.propTypes = {
    loadList: PropTypes.func.isRequired,
    todoLists: PropTypes.array.isRequired
}

export default TodoListLinks;