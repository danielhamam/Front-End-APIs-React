import React, { Component } from 'react'
import ListHeading from './ListHeading'
import ListItemsTable from './ListItemsTable'
import ListTrash from './ListTrash'
import ItemDelete from './ItemDelete'
import jTPS from '../transactions/jTPS'
import PropTypes from 'prop-types';

class trans_move {

    // Storing info in constructor
    constructor(currentList, new_index_1, new_index_2, firstItem, secondItem) {

        this.currentList = currentList;

        // Index
        this.new_index_1 = new_index_1;
        this.new_index_2 = new_index_2;

        // First Item
        this.firstItem = firstItem;
        this.firstItem_index = firstItem.key;

        // Second Item
        this.secondItem = secondItem;
        this.secondItem_index = secondItem.key;
    }

    undoTransaction() {

        // Swap back, Keys first
        let temp = this.currentList.items[this.secondItem_index].key
        this.currentList.items[this.secondItem_index].key = this.currentList.items[this.firstItem_index].key;
        this.currentList.items[this.firstItem_index].key = temp;

        // Swap items
        let temp2 = this.currentList.items[this.secondItem_index];
        this.currentList.items[this.secondItem_index] = this.currentList.items[this.new_index_1];
        this.currentList.items[this.firstItem_index] = temp2;

        this.currentList = this.currentList;

    }

    doTransaction() {

        let ind1 = this.new_index_1;
        let ind2 = this.new_index_2;

          // First item
          this.currentList.items[ind1] = this.firstItem;
          this.currentList.items[ind1].key = this.firstItem_index;

          // Second item
          this.currentList.items[ind2] = this.secondItem;
          this.currentList.items[ind2].key = this.secondItem_index;

          // Refresh the list
          this.currentList = this.currentList;
    }

}

export default trans_move;