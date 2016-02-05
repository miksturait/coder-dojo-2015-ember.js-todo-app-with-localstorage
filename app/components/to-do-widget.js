import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  session: Ember.inject.service(),
  actions: {
    addTodo(text){
      if (this.get('session.isAuthenticated')) {
        this.get('store').createRecord('todo', {text: text}).save();
        return(true);
      } else {
        alert('please log in :-)');
        return(false);
      }
    },
    removeTodo(todo) {
      todo.deleteRecord();
      todo.save();
    }
  }
});
