import Ember from 'ember';
import TableSearchableMixin from '../../../mixins/table-searchable';
import { module, test } from 'qunit';

module('Unit | Mixin | table searchable');

// Replace this with your real tests.
test('it works', function(assert) {
  var TableSearchableObject = Ember.Object.extend(TableSearchableMixin);
  var subject = TableSearchableObject.create();
  assert.ok(subject);
});
