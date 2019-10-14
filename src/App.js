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
};

const ItemSortCriteria = {
  SORT_BY_TASK_INCREASING: "sort_by_task_increasing",
  SORT_BY_TASK_DECREASING: "sort_by_task_decreasing",
  SORT_BY_DUE_DATE_INCREASING: "sort_by_due_date_increasing",
  SORT_BY_DUE_DATE_DECREASING: "sort_by_due_date_decreasing",
  SORT_BY_STATUS_INCREASING: "sort_by_status_increasing",
  SORT_BY_STATUS_DECREASING: "sort_by_status_decreasing"
};

class App extends Component {
  state = {
    currentScreen: AppScreen.HOME_SCREEN,
    todoLists: testTodoListData.todoLists,
    currentList: null,
    visibility : false,
    currentItemSortCriteria : null,
  }

isCurrentItemSortCriteria = (testCriteria) => {
    return this.state.currentItemSortCriteria === testCriteria;
}

sortItems = (sortingCriteria) => {
    this.setState({currentItemSortCriteria : sortingCriteria});
    this.state.currentList.items.sort(this.compare);
    this.setState({currentList: this.state.currentList});
}

processSortItemsByDueDate = () => {
    // IF WE ARE CURRENTLY INCREASING BY STATUS SWITCH TO DECREASING
    if ( this.isCurrentItemSortCriteria(ItemSortCriteria.SORT_BY_DUE_DATE_INCREASING)) {
        this.sortItems(ItemSortCriteria.SORT_BY_DUE_DATE_DECREASING);
    }
    // ELSE:
    else {
        this.sortItems(ItemSortCriteria.SORT_BY_DUE_DATE_INCREASING);
    }
}

processSortItemsByStatus = () => {
  // IF WE ARE CURRENTLY INCREASING BY STATUS SWITCH TO DECREASING
  if (this.isCurrentItemSortCriteria(ItemSortCriteria.SORT_BY_STATUS_INCREASING)) {
      this.sortItems(ItemSortCriteria.SORT_BY_STATUS_DECREASING);
  }
  // ALL OTHER CASES SORT BY INCREASING
  else {
      this.sortItems(ItemSortCriteria.SORT_BY_STATUS_INCREASING);
  }
}

processSortItemsByTask = () => {
  // IF WE ARE CURRENTLY INCREASING BY TASK SWITCH TO DECREASING
  if (this.isCurrentItemSortCriteria(ItemSortCriteria.SORT_BY_TASK_INCREASING)) {
      this.sortItems(ItemSortCriteria.SORT_BY_TASK_DECREASING);
  }
  // ALL OTHER CASES SORT BY INCREASING
  else {
      this.sortItems(ItemSortCriteria.SORT_BY_TASK_INCREASING);
  }
}

compare = (item1, item2) => {

  // IF IT'S A DECREASING CRITERIA SWAP THE ITEMS
  if (this.isCurrentItemSortCriteria(ItemSortCriteria.SORT_BY_TASK_DECREASING)
      || this.isCurrentItemSortCriteria(ItemSortCriteria.SORT_BY_STATUS_DECREASING)
      || this.isCurrentItemSortCriteria(ItemSortCriteria.SORT_BY_DUE_DATE_DECREASING)) {
      let temp = item1;
      item1 = item2;
      item2 = temp;
  }
  // SORT BY ITEM DESCRIPTION
  if (this.isCurrentItemSortCriteria(ItemSortCriteria.SORT_BY_TASK_INCREASING)
      || this.isCurrentItemSortCriteria(ItemSortCriteria.SORT_BY_TASK_DECREASING)) {
      if (item1.description < item2.description)
          return -1;
      else if (item1.description > item2.description)
          return 1;
      else
          return 0;
  }

  else if (this.isCurrentItemSortCriteria(ItemSortCriteria.SORT_BY_DUE_DATE_INCREASING)
            || this.isCurrentItemSortCriteria(ItemSortCriteria.SORT_BY_DUE_DATE_DECREASING)) {
            let dueDate1 = item1.due_date;
            let dueDate2 = item2.due_date;
            let date1 = new Date(dueDate1);
            let date2 = new Date(dueDate2);
            if (date1 < date2)
                return -1;
            else if (date1 > date2)
                return 1;
            else
                return 0;
  }

  // SORT BY COMPLETED
  else {
      if (item1.completed < item2.completed)
          return -1;
      else if (item1.completed > item2.completed)
          return 1;
      else
          return 0;
  }
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
          processSortItemsByDueDate = {this.processSortItemsByDueDate.bind(this)}
          processSortItemsByStatus = {this.processSortItemsByStatus.bind(this)}
          processSortItemsByTask = {this.processSortItemsByTask.bind(this)}
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