import Ember from 'ember';

const {
  A,
  on,
  set,
  get,
  getProperties,
  computed,
  getWithDefault,
  observer
} = Ember;

const DEFAULT_MESSAGES = {
  label: 'Search: ',
};

export default Ember.Mixin.create({
  searchable: true,

  /**
   * @type {string}
   */
  searchTerm: '',

  /**
   * Determines if filtering should ignore case
   * @type {boolean}
   */
  searchIgnoreCase: true,

  /**
   * Template with the search field
   * @type {string}
   */
  searchTemplate: 'components/imdt-table/search',

  /**
   * @type {Ember.Object[]}
   */
  filteredContent: computed('searchTerm', 'content.[]', function() {
    const {
      processedColumns,
      content,
      searchIgnoreCase,
    } = getProperties(this, 'processedColumns', 'content', 'searchIgnoreCase');

    let searchTerm = get(this, 'searchTerm');

    if(!get(searchTerm, 'length')) {
      return content;
    }

    return new A(content.filter(function (row) {
      return processedColumns.length ? processedColumns
      //.filter(x => x.get('isSearchable'))
      .any(c => {
        const contentPath = get(c, 'contentPath');

        if (contentPath) {
          let cellValue = '' + get(row, contentPath);
          if (searchIgnoreCase) {
            cellValue = cellValue.toLowerCase();
            searchTerm = searchTerm.toLowerCase();
          }
          return -1 !== cellValue.indexOf(searchTerm);
        }

        return false;
      }) : true;
    }));
  }),

  /**
   * Open first page if user has changed term
   * @method pageSizeDidChange
   */
  searchTermDidChange: observer('searchTerm', function() {
    set(this, 'currentPageNumber', 1);
  }),

  /**
   * Append the default messages used by the mixin
   * @type {boolean}
   */
   _setupMessages() {
     set(this, 'messages.search', DEFAULT_MESSAGES);
     this._super.call(this);
   },
});
