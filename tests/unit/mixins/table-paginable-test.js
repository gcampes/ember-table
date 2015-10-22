import Ember from 'ember';
import TablePaginableMixin from '../../../mixins/table-paginable';
import { module, test } from 'qunit';

module('Unit | Mixin | table paginable');

// Replace this with your real tests.
test('it works', function(assert) {
  var TablePaginableObject = Ember.Object.extend(TablePaginableMixin);
  var subject = TablePaginableObject.create();
  assert.ok(subject);
});
