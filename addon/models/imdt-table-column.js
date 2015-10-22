import Ember from 'ember';

export default Ember.Object.extend({
  /**
   * Name of the column to be displayed at the header.
   * @type {string}
   */
  columnTitle: undefined,

  /**
   * Path of the content for this cell.
   * @type {string}
   */
  contentPath: undefined,

  /**
   * Path to a custom template for this cell.
   * @type {string}
   */
  template: undefined,

  /**
   * Path of the content to use for sort, default is contentPath.
   * @type {string}
   */
  sortPath: undefined,

  /**
   * Whether the column can be sorted.
   * @type {bool}
   */
  isSortable: true,

  /**
   * Whether the column can searched by.
   * @type {bool}
   */
  isSearchable: true,

  /**
   * Whether the column is visible.
   * @type {bool}
   */
  isVisible: true,

  /**
   * Whether direction column is sorted.
   * Possible values are: 'none', 'asc' and 'desc'.
   * @type {string}
   */
  sortDirection: 'none',
  isSorted: Ember.computed.match('sortDirection', /^(asc|desc)$/),
  isAsc: Ember.computed.equal('sortDirection', 'asc'),
  isDesc: Ember.computed.equal('sortDirection', 'desc'),

  /**
   * Custom class to the column.
   * @type {string}
   */
  className: ''
});
