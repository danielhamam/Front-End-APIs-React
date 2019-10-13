import React, { Component } from 'react';
import testTodoListData from './TestTodoListData.json'
import HomeScreen from './components/home_screen/HomeScreen'
import ItemScreen from './components/item_screen/ItemScreen'
import ListScreen from './components/list_screen/ListScreen'
import PropTypes from 'prop-types'
import ItemDelete from './components/list_screen/ItemDelete';

const AppScreen = {
  HOME_SCREEN: "HOME_SCREEN",
  LIST_SCREEN: "LIST_SCREEN",
  ITEM_SCREEN: "ITEM_SCREEN",
}

class App extends Component {
  state = {
    currentScreen: AppScreen.HOME_SCREEN,
    todoLists: testTodoListData.todoLists,
    currentList: null,
    visibility : false,
  }

  deleteList = (key) => {
    this.setState({ todoLists: [...this.state.todoLists.filter( TodoList => TodoList.key !== key)] });
    this.setState({visibility : false});
    this.setState({currentScreen: AppScreen.HOME_SCREEN});
  }

  moveUp = (key) => {
    if (key != 0) {
      let tempItem = this.state.currentList.items[key - 1];
      this.state.currentList.items[key - 1] = this.state.currentList.items[key];
      this.state.currentList.items[key]= tempItem;

      this.state.currentList.items[key].key = this.state.currentList.items[key].key + 1;
      this.state.currentList.items[key-1].key = this.state.currentList.items[key-1].key - 1;
    }
    this.setState({currentList: this.state.currentList});
  }

  moveDown = (key) => {
  if (key != this.state.currentList.items.length - 1) {
    let temp = this.state.currentList.items[key + 1];
    temp.key = temp.key - 1;
    this.state.currentList.items[key].key = this.state.currentList.items[key].key + 1;
    this.state.currentList.items[key + 1] = this.state.currentList.items[key];
    this.state.currentList.items[key]= temp;
  }
  this.setState({currentList: this.state.currentList});
}

  deleteItem = (key) => {

    this.state.currentList.items.splice(key, 1);

    for (let i = 0; i < this.state.currentList.items.length; i++) {
      this.state.currentList.items[i].key = i;
    }

    this.setState({currentList: this.state.currentList});
  }

  visibilityTrue = e => {
    this.setState({visibility : true});
  }

  visibilityFalse = e => {
    this.setState({visibility : false});
  }

  goHome = () => {
    this.setState({currentScreen: AppScreen.HOME_SCREEN});
    this.setState({currentList: null});
  }

  goItemScreen = () => {
    this.setState({currentScreen: AppScreen.ITEM_SCREEN});
  }

  goListScreen = () => {
    this.setState({currentScreen: AppScreen.LIST_SCREEN});
  }

  loadList = (todoListToLoad) => {
    this.setState({currentScreen: AppScreen.LIST_SCREEN});
    this.setState({currentList: todoListToLoad});
    console.log("currentList: " + this.state.currentList);
    console.log("currentScreen: " + this.state.currentScreen);
  }

  render() {
    switch(this.state.currentScreen) {
      case AppScreen.HOME_SCREEN:
        return <HomeScreen 
        loadList={this.loadList.bind(this)} 
        todoLists={this.state.todoLists} />;
      case AppScreen.LIST_SCREEN:            
        return <ListScreen
          goHome={this.goHome.bind(this)}
          goItemScreen={this.goItemScreen.bind(this)}
          todoList={this.state.currentList}
          visibilityTrue = {this.visibilityTrue.bind(this)}
          visibilityFalse = {this.visibilityFalse.bind(this)}
          deleteList = {this.deleteList.bind(this)}
          visibility = {this.state.visibility}
          moveUp = {this.moveUp.bind(this)}
          moveDown = {this.moveDown.bind(this)}
          deleteItem = {this.deleteItem.bind(this)}>
          </ListScreen>;
      case AppScreen.ITEM_SCREEN:
        return <ItemScreen 
          goListScreen={this.goListScreen.bind(this)} />;
      default:
        return <div>ERROR</div>;
    }
  }
}

export default App;