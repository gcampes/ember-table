import Ember from 'ember';
import SortableMixin from '../../../mixins/sortable';
import { module, test } from 'qunit';

module('Unit | Mixin | sortable');

// Replace this with your real tests.
test('it works', function(assert) {
  var SortableObject = Ember.Object.extend(SortableMixin);
  var subject = SortableObject.create();
  assert.ok(subject);
});
