import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('book', {
      include: "chapters",
        //'filter[published_after]': '1990-01-01'
      filter: {
        published_after: '1990-01-01'
      }
    });
  }
});