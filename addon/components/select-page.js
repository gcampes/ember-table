import Ember from "ember";

export default Ember.Component.extend({
  content: null,
  selectedValue: null,

  didInitAttrs() {
    this._super(...arguments);
    var content = this.get('content');

    if (!content) {
      this.set('content', []);
    }
  }
});
