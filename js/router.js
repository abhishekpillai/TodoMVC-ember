// This will tell Ember.js to detect when the application's
// URL matches '/' and to render the todos template
Todos.Router.map(function() {
  this.resource('todos', { path: '/' }, function () {
    // additional child routes will go here later
    this.route('active');
  });
});

// TodosRoute was provided by Ember.js
// Because we hadn't implemented this class before, Ember.js provided a Route
// for us with the default behavior of rendering a matching template named todos

// Ember.js naming conventions #=>
// http://guides.emberjs.com/v1.10.0/concepts/naming-conventions/ for a route
// defined like: this.route('favorites'); Ember.js will look for
// App.FavoritesRoute, App.FavoritesController, and a 'favorites' template

// The below route deviates from default behavior because we need to load a
// specific set of models
Todos.TodosRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('todo'); // returns all existing todos
  }
});

// When '/' is loaded, Ember.js calls the todos route and render the todos
// template. It also calls the todos.index and fills the {{outlet}} in the
// todos template withe todos/index template value. The model data for this
// template is the result of the model method of the TodosIndexRoute
Todos.TodosIndexRoute = Ember.Route.extend({
  model: function() {
    return this.modelFor('todos');
  }
});

// Normally transitioning into a new route changes the template rendered into
// the parent {{outlet}}, but in this case we'd like to reuse the existing
// todos/index template. We can accomplish this by implementing the
// renderTemplate method and calling render ourselves with the specific
// template and controller options.
Todos.TodosActiveRoute = Ember.Route.extend({
  model: function(){
    return this.store.filter('todo', function(todo) {
      return !todo.get('isCompleted');
    });
  },
  renderTemplate: function(controller) {
    this.render('todos/index', {controller: controller});
  }
});
