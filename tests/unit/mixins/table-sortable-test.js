import Ember from 'ember';
import TableSortableMixin from '../../../mixins/table-sortable';
import { module, test } from 'qunit';

module('Unit | Mixin | table sortable');

// Replace this with your real tests.
test('it works', function(assert) {
  var TableSortableObject = Ember.Object.extend(TableSortableMixin);
  var subject = TableSortableObject.create();
  assert.ok(subject);
});
