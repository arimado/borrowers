import DS from 'ember-data';
import Ember from 'ember';
import { hasMany } from 'ember-data/relationships';
const { computed } = Ember;


export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string'),
  twitter: DS.attr('string'),
  loans: hasMany('loan'),
  fullName: computed('firstName', 'lastName', {
    get() {
      return this.get('firstName') + ' ' + this.get('lastName');
    }
  })
});
