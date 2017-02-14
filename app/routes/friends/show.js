import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    delete(friend) {
      friend.destoryRecord().then(() => {
        this.transitionToRoute('friends.index');
      });
    }
  }
});
