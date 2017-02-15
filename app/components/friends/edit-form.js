import Ember from 'ember';
const { computed } = Ember;

export default Ember.Component.extend({
  actions: {
    save() {
      console.log('+- save action in edit-form component');
      if (this.get('isValid')) {
        this.get('model').save().then(friend => {
          return this.save(friend);
        }, err => {
          this.set('errorMessage', 'there was something wrong with the model ' + err);
        });
      } else {
        this.set('errorMessage', 'You have to fill all the fields');
      }
    },
    cancel() {
      console.log('+- cancel action in edit-form component');
      this.cancel(this.get('model'));
    }
  },
  hasEmail: computed.notEmpty('model.email'),
  hasFirstName: computed.notEmpty('model.firstName'),
  hasLastName: computed.notEmpty('model.lastName'),
  hasTwitter: computed.notEmpty('model.twitter'),
  isValid: computed.and(
    'hasEmail',
    'hasFirstName',
    'hasLastName',
    'hasTwitter'
  )
});
