import Ember from 'ember';
const { computed, isEmpty } = Ember;

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
  isValid: computed(
    'model.email',
    'model.firstName',
    'model.lastName',
    'model.twitter',
    {
      get() {
        return !isEmpty(this.get('model.email')) &&
          !isEmpty(this.get('model.firstName')) &&
          !isEmpty(this.get('model.lastName')) &&
          !isEmpty(this.get('model.twitter'));
      }
    }
  )
});
