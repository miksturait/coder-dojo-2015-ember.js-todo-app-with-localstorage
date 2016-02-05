import Ember from 'ember';
import ToriiFirebaseAdapter from 'emberfire/torii-adapters/firebase';

export default ToriiFirebaseAdapter.extend({
  firebase: Ember.inject.service(),
  store: Ember.inject.service(),

  open(authentication) {
    return this._findOrCreateUser(authentication.uid, authentication[authentication.provider])
      .then(user => Ember.RSVP.resolve({
        provider: authentication.provider,
        uid: authentication.uid,
        currentUser: user
      }));
  },

  _findOrCreateUser(uid, userData) {
    let store = this.get('store');
    return store.findRecord('user', uid).then(
      function (user) {
        user.set('name', userData.displayName);
        user.set('imageUrl', userData.profileImageURL);
        user.save();
        return user;
      },
      function () {
        let user = store.createRecord('user', {
          id: uid,
          name: userData.displayName,
          imageUrl: userData.profileImageURL
        });
        user.save();
        return user;
      }
    );
  },
});
