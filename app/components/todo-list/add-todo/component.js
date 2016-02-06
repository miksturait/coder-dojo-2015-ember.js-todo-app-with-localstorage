import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit() {
      let description = this.get('description');
      if (this.attrs.addTodo(description)) {
        this.set('description', '');
      }
    }
  }
});
