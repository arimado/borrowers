import Ember from 'ember';
const { inject, computed } = Ember;

export default Ember.Component.extend({
  store: inject.service(),
  articles: computed({
    get() {
      return this.get('store').findAll('article');
    }
  }).readOnly(),
  save() {
    this.get('model').save().then(model => {
      this.back(model.get('friend'));
    }, () => {
      this.set(
        'errorMessage',
        'there was something wrong with saving the loan'
      );
    });
  },
  cancel() {
    this.back(this.get('model.friend'));
  }
});
