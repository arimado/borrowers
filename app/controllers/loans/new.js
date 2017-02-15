import Ember from 'ember';

export default Ember.Controller.extend({
  backToIndex(friend) {
    console.log('back to index fired');
    this.transitionToRoute('loans.index', friend)
  }
});
