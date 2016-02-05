import Ember from 'ember';

export default Ember.Route.extend({
  store: Ember.inject.service(),

  beforeModel() {
    return this.get("session").fetch().catch(function () {
    });
  },
  findOrCreateUser(data) {
    this.store.find('user', data.uid).then(
      function (user) {
        user.set('name', data.currentUser.displayName);
        user.set('imageUrl', data.currentUser.profileImageURL);
        user.save();
      },
      () => this.store.createRecord('user',
        {id: data.uid, name: data.currentUser.displayName, imageUrl: data.currentUser.profileImageURL}).save()
    );
  },

  actions: {
    signIn(provider) {
      this.get("session").open("firebase", {provider: provider}).then((data) => this.findOrCreateUser(data));
    },
    signOut() {
      this.get("session").close();
    }
  }
});
