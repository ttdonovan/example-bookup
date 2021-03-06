import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  datePublished: DS.attr('date'),
  chapters: DS.hasMany('chapter'),
  firstChapter: DS.attr(),
  photos: DS.hasMany('photo'),
  author: DS.belongsTo('author')
});
