// This code creates a new class Todo and places it within your application's
// namespace. Each todo will have two attributes: title and isCompleted.
Todos.Todo = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});

//  Fixtures are a way to put sample data into an application before connecting
//  the application to long-term persistence
Todos.Todo.FIXTURES = [
 {
   id: 1,
   title: 'Learn Ember.js',
   isCompleted: true
 },
 {
   id: 2,
   title: '...',
   isCompleted: false
 },
 {
   id: 3,
   title: 'Profit!',
   isCompleted: false
 }
];
