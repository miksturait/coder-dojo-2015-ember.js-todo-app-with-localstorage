import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit() {
      const text = this.get("text");
      if (this.attrs.onAdd(text)) {
        this.set('text',"");
      }
      this.$('input').focus();
    }
  }
});
