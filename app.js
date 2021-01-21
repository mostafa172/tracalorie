// Storage Ctrl

// Item Ctrl
const ItemCtrl  = (function(){
  // Item Constructor
  const Item = function(id, name, calories){
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  // Data Structure / State
  const data = {
    items: [
      {id: 0, name: 'Steak Dinner', calories: 1200},
      {id: 1, name: 'Cookie', calories: 400},
      {id: 2, name: 'Eggs', calories: 300}
    ],
    currentItem: null,
    totalCalories: 0
  }

  // Public 
  return {
    logData: function(){
      return data;
    }
  }
})();

// UI Ctrl
const UICtrl  = (function(){

  // Public 
  return{

  }
})();

// App Ctrl
const App = (function(itemCtrl, UICtrl){
  
  // Public 
  return {
    init: function(){
      console.log('Initializing App')
    }
  }

})(ItemCtrl, UICtrl);

// Initializing App
App.init();