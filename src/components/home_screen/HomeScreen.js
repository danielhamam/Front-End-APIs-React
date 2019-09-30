import React, { Component } from 'react'
import Banner from './Banner'
import HomeHeader from './HomeHeader'
import TodoListLinks from './TodoListLinks'
import PropTypes from 'prop-types';

export class HomeScreen extends Component {
    render() {
        return (
            <div id="todo_home">
                <div id="home_your_lists_container">
                    <HomeHeader />
                    <TodoListLinks loadList={this.props.loadList} todoLists={this.props.todoLists} />
                </div>
                <Banner />
                <div id="home_new_list_container">
                    <button id="home_new_list_button">
                        Create a New To Do List
                    </button>
                </div>
            </div>
        )
    }
}

HomeScreen.propTypes = {
    loadList: PropTypes.func.isRequired,
    todoLists: PropTypes.array.isRequired
}

export default HomeScreen
