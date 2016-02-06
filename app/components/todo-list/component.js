import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  actions: {
    addTodo(description) {
      let store = this.get('store');

      store.createRecord('todo', {description: description});
      return true;
    },
    completeTodo(todo) {
      todo.deleteRecord();
      todo.save()
    }

  }
});
