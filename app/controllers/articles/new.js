import Ember from 'ember';

export default Ember.Controller.extend({
  save() {
    console.log('save action called in articles new');
  },
  cancel() {
    console.log('cancel action called in articles new');
  }
});
