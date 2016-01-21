import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  actions: {
    addTodo(text){
      this.get('store').createRecord('todo', {text: text}).save();
    },
    removeTodo(todo) {
      todo.deleteRecord();
      todo.save();
    }
  }
});
