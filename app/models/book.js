import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  chapters: DS.hasMany('chapter'),
  author: DS.belongsTo('author')
});
