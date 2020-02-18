import item from './item.js';
let items = [];
let hideCheckedItems = false;

export default {
  items,
  hideCheckedItems,
  findById: function(id) {
    return this.items.find(element => element.id === id);
  },

  addItem: function(name) {
    try {
      item.validateName(name);
      let newItem = item.create(name);
      this.items.push(newItem);
    } catch (error) {
      console.log(`cannot add item: ${error.message}`);
    }
  },

  findAndToggleChecked: function(id) {
    let foundItem = this.findById(id);
    foundItem.checked = !foundItem.checked;
  },



  findAndUpdateName: function(id, newName) {
    try {
      item.validateName(newName);
      let foundItem = this.findById(id);
      foundItem.name = newName;
    } catch (error) {
      console.log(`Cannot update name: ${error.name}`);
    }
  },

  findAndDelete: function(id) {  
    let index = this.items.findIndex(element => element.id === id);
    this.items.splice(index, 1);
  },

  toggleCheckedFilter: function() {
    this.hideCheckedItems = !this.hideCheckedItems;
  }
};


