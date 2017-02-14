import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save() {
      console.log('+--- save action in edit-form controller');
    },
    cancel() {
      console.log('+--- cancel action in edit-form controller');
    }
  }
});
