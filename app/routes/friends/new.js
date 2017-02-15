import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('friend');
  },
  activate() {

  },
  deactivate() {

  },
  resetController: function (controller, isExiting) {
    if (isExiting) {
      console.log('----- resetController hook called -----');
      const model = controller.get('model');
      if ( model.get('isNew') ) {
        model.destroyRecord();
      }
    }
  }
});
