// This will tell Ember.js to detect when the application's
// URL matches '/' and to render the todos template
Todos.Router.map(function() {
    this.resource('todos', { path: '/' });
});

// TodosRoute was provided by Ember.js
// Because we hadn't implemented this class before, Ember.js provided a Route
// for us with the default behavior of rendering a matching template named todos

// Ember.js naming conventions #=> http://guides.emberjs.com/v1.10.0/concepts/naming-conventions/
// for a route defined like: this.route('favorites');
// Ember.js will look for App.FavoritesRoute, App.FavoritesController, and a
// 'favorites' template

// The below route deviates from default behavior because we need to load a
// specific set of models

Todos.TodosRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('todo'); // returns all existing todos
  }
});
