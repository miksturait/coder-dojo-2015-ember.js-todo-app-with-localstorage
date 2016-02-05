import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  session: Ember.inject.service(),
  actions: {
    addTodo(text){
      let session = this.get('session'),
        store = this.get('store');

      if (session.get('isAuthenticated')) {
        store.createRecord('todo', {text: text, user: session.get('currentUser')}).save();
        return true;
      } else {
        alert('please log in :-)');
        return false;
      }
    },
    completeTodo(todo) {
      let session = this.get('session');

      if (session.get('isAuthenticated')) {
        todo.set('done', true);
        todo.save();
      } else {
        alert('please log in :-)');
        return false;
      }
    }
  }
});
