import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return  Ember.RSVP.resolve({
     todos: this.store.peekAll('todo')
    });
  }
});
